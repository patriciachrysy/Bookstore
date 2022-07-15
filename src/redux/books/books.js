const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const initialState = [
  { id: 0, title: 'Moby Dick', author: 'Charles Dickens' },
  { id: 1, title: 'L\'enfant noir', author: 'Camara Layes' },
  { id: 2, title: 'Meurtre au presbytère', author: 'Agatha Christie' },
];

export const addBook = (payload) => ({ type: ADD_BOOK, payload });

export const removeBook = (payload) => ({ type: REMOVE_BOOK, payload });

const books = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export default books;
