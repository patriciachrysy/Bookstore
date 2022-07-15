import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const dispatch = useDispatch();
  const { book } = props;

  const handleClick = () => {
    dispatch(removeBook(book.id));
  };

  return (
    <li>
      <h1>{book.title}</h1>
      <span>{book.author}</span>
      <button type="button" onClick={() => handleClick()}>Remove</button>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
