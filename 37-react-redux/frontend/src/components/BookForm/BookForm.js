import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../../redux/books/actionCreators';
import booksData from '../../data/books.json';
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
    const randomBookWithID = {
      ...randomBook,
      id: uuidv4(),
      isFavorite: false,
    };
    dispatch(addBook(randomBookWithID));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData) {
      const newBook = {
        ...formData,
        id: uuidv4(),
        isFavorite: false,
      };
      dispatch(addBook(newBook));
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
