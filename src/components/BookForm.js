import React, { useState } from 'react';
import PropTypes from 'prop-types';

const BookForm = (props) => {
  const { addBookProps } = props;
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && author.trim()) {
      addBookProps(title, author);
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input type="text" placeholder="Book title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder="Book author" value={author} onChange={(e) => setAuthor(e.target.value)} />
      <button type="submit">ADD BOOK</button>
    </form>
  );
};

BookForm.propTypes = {
  addBookProps: PropTypes.func.isRequired,
};

export default BookForm;
