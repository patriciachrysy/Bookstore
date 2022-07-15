import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import categories from './categories/categories';
import books from './books/books';

const store = configureStore({
  reducer: {
    books,
    categories,
  },
}, applyMiddleware(thunk));

export default store;
