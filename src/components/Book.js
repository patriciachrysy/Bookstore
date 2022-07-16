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
      <div className="book-infos">
        <span className="book-category">{book.category}</span>
        <h1>{book.title}</h1>
        <span className="book-author">{book.author}</span>
        <div className="buttons">
          <button type="button">Comment</button>
          <button type="button" onClick={() => handleClick()}>Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="progress">
        {/* <div className="progress-circle-wrapper">
          <div className="progress-circle-inner" />
        </div> */}
        <div className="circle-wrap">
          <div className="inside-circle" />
          <div className="circle">
            <div className="mask full">
              <div className="fill" />
            </div>
          </div>
        </div>
        <div className="data">
          <span>8%</span>
          <span>Completed</span>
        </div>
      </div>
      <div className="chapter-infos">
        <span>Current Chapter</span>
        <span>Chapter 3: &quot;A lesson learned&quot;</span>
        <button type="button">Update progress</button>
      </div>
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
