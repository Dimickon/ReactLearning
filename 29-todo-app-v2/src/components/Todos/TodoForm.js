import { useState } from 'react';
import styles from './TodoForm.module.css';

export default function TodoForm({ addTodo }) {
  const [data, setData] = useState('');
  const [errorTitle, setErrorTitle] = useState('');

  function onSubmitHandler(event) {
    event.preventDefault();

    if (!data) {
      setErrorTitle('Введите название');
      return;
    }
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
            onChange={(e) => {
              setData(e.target.value);
              if (errorTitle) {
                setErrorTitle('');
              }
            }}
            placeholder="Enter new todo"
          />
          {Boolean(errorTitle.length) && <span>{errorTitle}</span>}
        </label>

        <button className={styles.todo__btn} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
