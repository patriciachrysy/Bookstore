import createApp from "../../services/AppService";
import BooksService from "../../services/BooksService";

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const RETRIVE_BOOKS = 'bookstore/books/RETRIVE_BOOKS';

const initialState = [
  { id: 0, title: 'Moby Dick', author: 'Charles Dickens' },
  { id: 1, title: 'L\'enfant noir', author: 'Camara Layes' },
  { id: 2, title: 'Meurtre au presbytère', author: 'Agatha Christie' },
];

const initApp = async () => {
  try {
    const res = await createApp();
    localStorage.setItem('appId', res.data);
    return Promise.resolve('App initialized successfully');
  }catch(err){
    return Promise.reject(`Failed to init the app: ${err}`);
  }
}

export const addBook = (payload) => ({ type: ADD_BOOK, payload });

export const removeBook = (payload) => ({ type: REMOVE_BOOK, payload });

export const retrieveBooks = () => async(dispatch) => {
  let appId = localStorage.getItem(appId);
  try {
    const res = await BooksService.getAll(appId);
    dispatch({type: RETRIVE_BOOKS, payload: res.data});
  }catch(err){
    console.log(err);
  }
}

const books = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    case RETRIVE_BOOKS:
      return action.payload;
    default:
      return state;
  }
};

export default books;
