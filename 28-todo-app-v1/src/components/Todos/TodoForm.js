import { useState } from 'react';
import styles from './TodoForm.module.css';

export default function TodoForm({ addTodo }) {
  const [data, setData] = useState('');

  function onSubmitHandler(event) {
    event.preventDefault();
    addTodo(data);
    setData('');
  }

  return (
    <div className="todo__header">
      <h1>Todo App</h1>
      <form className={styles.todo__form} onSubmit={onSubmitHandler}>
        <label>
          <input
            type="text"
            value={data}
            onChange={(e) => setData(e.target.value)}
            placeholder="Enter new todo"
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
