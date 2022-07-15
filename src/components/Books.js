import React from 'react';
// import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import Book from './Book';
// import BookForm from './BookForm';

const Books = () => {
  const books = useSelector((state) => state.books);
  // const [books, setBooks] = useState([]);

  /* const deleteBook = (bookId) => {
    setBooks(books.filter((book) => book.id !== bookId));
  };

  const addBook = (bookTitle, bookAuthor) => {
    setBooks([...books, {
      id: uuidv4(),
      title: bookTitle,
      author: bookAuthor,
    }]);
  }; */

  return (
    <div>
      <ul>
        {
            books.map((book) => <Book key={book.id} book={book} />)
            }
      </ul>
      {/* <BookForm addBookProps={addBook} /> */}
    </div>
  );
};

export default Books;
