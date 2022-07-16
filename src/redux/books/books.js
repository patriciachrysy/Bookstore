import { createAsyncThunk } from '@reduxjs/toolkit';
import createApp from '../../services/AppService';
import BooksService from '../../services/BooksService';

const ADD_ASYNC_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_ASYNC_BOOK = 'bookstore/books/REMOVE_BOOK';
const RETRIEVE_ASYNC_BOOKS = 'bookstore/books/RETRIVE_BOOKS';

const ADD_BOOK = 'bookstore/books/ADD_BOOK/fulfilled';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK/fulfilled';
const RETRIEVE_BOOKS = 'bookstore/books/RETRIVE_BOOKS/fulfilled';

const initialState = [];

const initApp = async () => {
  try {
    const res = await createApp();
    localStorage.setItem('appId', res.data);
    return Promise.resolve('App initialized successfully');
  } catch (err) {
    return Promise.reject(err);
  }
};

export const addBook = createAsyncThunk(
  ADD_ASYNC_BOOK,
  async (book) => {
    const appId = localStorage.getItem('appId');
    const res = await BooksService.create(appId, book);
    const { data } = res;
    return { book, data };
  },
);

export const removeBook = createAsyncThunk(
  REMOVE_ASYNC_BOOK,
  async (bookId) => {
    const appId = localStorage.getItem('appId');
    const res = await BooksService.remove(appId, bookId);
    const { data } = res;
    return { bookId, data };
  },
);

export const retrieveBooks = createAsyncThunk(
  RETRIEVE_ASYNC_BOOKS,
  async () => {
    if (localStorage.getItem('appId') === null) {
      await initApp().then(
        (success) => success,
        (err) => err,
      );
    }

    const appId = localStorage.getItem('appId');
    const res = await BooksService.getAll(appId);
    let allBooks = [];
    if (res.data) {
      allBooks = Object.keys(res.data).map((key) => ({ item_id: key, ...res.data[key][0] }));
    }
    return allBooks;
  },
);

const books = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload.books];
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.payload.bookId);
    case RETRIEVE_BOOKS:
      return action.payload;
    default:
      return state;
  }
};

export default books;
