import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { retrieveBooks } from '../redux/books/books';
import Book from './Book';
import BookForm from './BookForm';

const Books = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveBooks());
  }, []);

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
