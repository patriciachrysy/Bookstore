import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { book, deleteBookProps } = props;

  return (
    <li>
      <h1>{book.title}</h1>
      <span>{book.author}</span>
      <button type="button" onClick={() => deleteBookProps(book.id)}>Remove</button>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
  deleteBookProps: PropTypes.func.isRequired,
};

export default Book;
