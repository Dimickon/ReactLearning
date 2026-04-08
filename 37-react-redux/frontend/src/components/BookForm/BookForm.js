import { useState } from 'react';
import './BookForm.css';

const BookForm = () => {
  // const [title, setTitle] = useState('');
  // const [author, setAuthor] = useState('');
  const initialStateForm = {
    title: '',
    author: '',
  };
  const [formData, setFormData] = useState(initialStateForm);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData) {
      console.log(formData);
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
      </form>
    </div>
  );
};

export default BookForm;
