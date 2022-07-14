import { configureStore } from '@reduxjs/toolkit';
import categories from './categories/categories';
import books from './books/books';

const store = configureStore({
  books,
  categories,
});

export default store;
