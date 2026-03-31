import styles from './TodoForm.module.css';

export default function TodoForm() {
  return (
    <div className="todo__header">
      <h1>Todo App</h1>
      <form className={styles.todo__form}>
        <label>
          <input type="text" placeholder="Enter new todo" />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
