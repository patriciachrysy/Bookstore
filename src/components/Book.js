import React from 'react';

const Book = (props) => {
    const { book } = props;

    return (
        <div key={book.id}>
            <span>{book.category}</span>
            <h1>{book.title}</h1>
            <span>{book.author}</span>
            <button onClick={() => deleteBook(book.id)}>Remove</button>
        </div>
    )
}

Book.propsType = {
    book: PropsType.object.isRequired,
    deleteBook: PropsType.func.isRequired
}

export default Book;