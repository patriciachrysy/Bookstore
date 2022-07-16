import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';
import '../styles/BookForm.css';

const BookForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && author.trim()) {
      dispatch(addBook({
        item_id: uuidv4(), title, author, category: 'none',
      }));
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="book-form">
      <h1>add new book</h1>
      <div className="content">
        <input type="text" placeholder="Book title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" placeholder="Book author" value={author} onChange={(e) => setAuthor(e.target.value)} />
        <button type="submit">ADD BOOK</button>
      </div>
    </form>
  );
};

export default BookForm;
