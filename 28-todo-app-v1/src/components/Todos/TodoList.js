import TodoItem from './TodoItem';
import styles from './TodoList.module.css';

export default function TodoList() {
  return (
    <div className={styles.todo__list}>
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
}
