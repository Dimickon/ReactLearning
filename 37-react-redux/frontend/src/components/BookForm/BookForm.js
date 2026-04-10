import { useState } from 'react';
import { useDispatch } from 'react-redux';
//import { addBook } from '../../redux/books/actionCreators';
import { addBook } from '../../redux/slices/booksSlice';
import booksData from '../../data/books.json';
import createBookWithID from '../../utils/createBookWithID';
import './BookForm.css';

const BookForm = () => {
  const initialStateForm = {
    title: '',
    author: '',
  };
  const [formData, setFormData] = useState(initialStateForm);
  const dispatch = useDispatch();

  const handleAddRandomBook = () => {
    const randomIndex = Math.floor(Math.random() * booksData.length);
    const randomBook = booksData[randomIndex];
    dispatch(addBook(createBookWithID(randomBook)));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData) {
      dispatch(addBook(createBookWithID(formData)));
    }

    setFormData(initialStateForm);
  };

  function handleInputChange(text, name) {
    setFormData({ ...formData, [name]: text });
  }

  return (
    <div className="app-block book-form">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="title"
            value={formData.title}
            onChange={(e) => handleInputChange(e.target.value, 'title')}
          />
        </div>
        <div>
          <label htmlFor="author">Author: </label>
          <input
            type="text"
            id="author"
            value={formData.author}
            onChange={(e) => handleInputChange(e.target.value, 'author')}
          />
        </div>
        <button type="submit">Add book</button>
        <button type="button" onClick={handleAddRandomBook}>
          Add random
        </button>
      </form>
    </div>
  );
};

export default BookForm;
