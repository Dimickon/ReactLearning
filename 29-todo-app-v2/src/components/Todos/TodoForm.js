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
      <form className={styles.todo__form} onSubmit={onSubmitHandler}>
        <label>
          <input
            className={styles.todo__input}
            type="text"
            value={data}
            onChange={(e) => setData(e.target.value)}
            placeholder="Enter new todo"
          />
        </label>

        <button className={styles.todo__btn} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
