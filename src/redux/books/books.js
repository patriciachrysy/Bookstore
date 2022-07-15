import createApp from '../../services/AppService';
import BooksService from '../../services/BooksService';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const RETRIVE_BOOKS = 'bookstore/books/RETRIVE_BOOKS';

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

export const addBook = (payload) => async (dispatch) => {
  const appId = localStorage.getItem('appId');
  try {
    const res = await BooksService.create(appId, payload);
    dispatch({ type: ADD_BOOK, payload });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const removeBook = (payload) => async (dispatch) => {
  const appId = localStorage.getItem('appId');
  try {
    const res = await BooksService.remove(appId, payload);
    dispatch({ type: REMOVE_BOOK, payload });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const retrieveBooks = () => async (dispatch) => {
  if (localStorage.getItem('appId') === null) {
    await initApp().then(
      (success) => success,
      (err) => err,
    );
  }

  const appId = localStorage.getItem('appId');
  try {
    const res = await BooksService.getAll(appId);
    let allBooks = [];
    if (res.data) {
      allBooks = Object.keys(res.data).map((key) => ({ item_id: key, ...res.data[key][0] }));
    }

    dispatch({ type: RETRIVE_BOOKS, payload: allBooks });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

const books = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.payload);
    case RETRIVE_BOOKS:
      return action.payload;
    default:
      return state;
  }
};

export default books;
