import React, { useState } from 'react';
import Book from 'Book';
import BookForm from 'BookForm';

const Books = () => {
    const [books, setBooks] = useState([]);

    const deleteBook = (bookId) => {};

    const addBook = (bookTitle, bookAuthor) => {}; 

    return (
        <div>
            <ul>
                {
                    books.map(book => <Book book={book} deleteBookProps={deleteBook}/>)
                }
            </ul>
            <BookForm addBookProps={addBook} />
        </div>
    )
}

export default Books;