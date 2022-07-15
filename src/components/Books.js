import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import BookForm from './BookForm';

const Books = () => {
  const books = useSelector((state) => state.books);

  return (
    <div>
      <ul>
        {
            books.map((book) => <Book key={book.id} book={book} />)
            }
      </ul>
      <BookForm />
    </div>
  );
};

export default Books;
