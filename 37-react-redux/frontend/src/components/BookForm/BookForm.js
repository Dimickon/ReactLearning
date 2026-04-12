import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import { addBook } from '../../redux/books/actionCreators';
import { FaSpinner } from 'react-icons/fa';
import {
  addBook,
  fetchBook,
  selectIsLoadingViaAPI,
} from '../../redux/slices/booksSlice';
import { setError } from '../../redux/slices/errorSlice';
import booksData from '../../data/books.json';
import createBookWithID from '../../utils/createBookWithID';
import './BookForm.css';

const BookForm = () => {
  const initialStateForm = {
    title: '',
    author: '',
  };
  const [formData, setFormData] = useState(initialStateForm);
  const isLoadingViaAPI = useSelector(selectIsLoadingViaAPI);
  const dispatch = useDispatch();

  const handleAddRandomBook = () => {
    const randomIndex = Math.floor(Math.random() * booksData.length);
    const randomBook = booksData[randomIndex];
    dispatch(addBook(createBookWithID(randomBook, 'random')));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Проверка объекта с полями форм на заполненность всех полей
    const isFormValid = Object.values(formData).every((value) => {
      if (typeof value === 'string') return value.trim() !== '';
      return value !== null && value !== undefined;
    });

    if (isFormValid) {
      dispatch(addBook(createBookWithID(formData, 'manual')));
    } else {
      dispatch(setError('You must fill title and author!'));
    }

    setFormData(initialStateForm);
  };

  function handleInputChange(text, name) {
    setFormData({ ...formData, [name]: text });
  }

  const handleAddRandomBookViaAPI = () => {
    dispatch(fetchBook('http://localhost:4000/random-book-delayed'));
  };

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
        <button
          type="button"
          onClick={handleAddRandomBookViaAPI}
          disabled={isLoadingViaAPI}
        >
          {isLoadingViaAPI ? (
            <>
              <span>Loading Book...</span>
              <FaSpinner className="spinner" />
            </>
          ) : (
            'Add random via API'
          )}
        </button>
      </form>
    </div>
  );
};

export default BookForm;
