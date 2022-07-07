import React, { useStates } from 'react';

const Book = (props) => {
    const { book } = props;

    return (
        <div key={book.id}>
            <span>{book.category}</span>
            <h1>{book.title}</h1>
            <span>{book.author}</span>
            <button onClick={deleteBook(book.id)}>Remove</button>
        </div>
    )
}