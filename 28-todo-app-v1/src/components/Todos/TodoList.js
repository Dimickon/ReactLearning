import TodoItem from './TodoItem';
import styles from './TodoList.module.css';

export default function TodoList({ todos }) {
  return (
    <div className={styles.todo__list}>
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} />
      ))}
    </div>
  );
}
