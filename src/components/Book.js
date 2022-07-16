import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import '../styles/Book.css';

const Book = (props) => {
  const dispatch = useDispatch();
  const { book } = props;

  const handleClick = () => {
    dispatch(removeBook(book.item_id));
  };

  return (
    <li className="book">
      <span className="book-category">{book.category}</span>
      <h1>{book.title}</h1>
      <span className="book-author">{book.author}</span>
      <button type="button" onClick={() => handleClick()}>Remove</button>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
