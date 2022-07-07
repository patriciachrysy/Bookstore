import React, { useState } from 'react';

const BookForm = (props) => {
    const { addBookProps } = props;
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");

    const handleSubmit = () => {
        if(title.trim() && author.trim()) {
            addBookProps(title, author);
        }else{
            alert("Please provide a title and an author");
        }
    }

    return (
        <form onSubmit={() => handleSubmit()}>
            <input type='text' placeholder='Book title' value={title} onChange={() => setTitle(e.target.value)} />
            <input type='text' placeholder='Book author' value={author} onChange={() => setAuthor(e.target.value)} />
            <button>ADD BOOK</button>
        </form>
    )
}

Book.propsType = {
    addBookProps: PropsType.func.isRequired
}

export default BookForm;