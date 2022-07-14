import { configureStore } from "@reduxjs/toolkit";
import categories from './categories/categories';
import books from './books/books';

export default store = configureStore({
    books,
    categories
});