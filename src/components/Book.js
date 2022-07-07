import React from 'react';

const Book = (props) => {
    const { book, deleteBookProps } = props;

    return (
        <li key={book.id}>
            <span>{book.category}</span>
            <h1>{book.title}</h1>
            <span>{book.author}</span>
            <button onClick={() => deleteBookProps(book.id)}>Remove</button>
        </li>
    )
}

Book.propsType = {
    book: PropsType.object.isRequired,
    deleteBookProps: PropsType.func.isRequired
}

export default Book;