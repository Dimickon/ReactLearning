import { useState } from 'react';
import Todo from './Todo';
import styles from './TodoForm.module.css';

export default function TodoForm() {
  const [data, setData] = useState('');

  function handleFormSubmit(event) {
    event.preventDefault();

    console.log(data);
    alert(JSON.stringify(data));
  }

  function handleInputChange(text) {
    setData(text);
  }

  return (
    <div className="todo__header">
      <h1>Todo App</h1>
      <form className={styles.todo__form} onSubmit={handleFormSubmit}>
        <label>
          <input
            type="text"
            value={data}
            onChange={(e) => handleInputChange(e.target.value)}
            placeholder="Enter new todo"
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
