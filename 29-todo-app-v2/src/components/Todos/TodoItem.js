import { RiTodoFill } from 'react-icons/ri';
import styles from './TodoItem.module.css';

export default function TodoItem({ todo, deleteTodo }) {
  return (
    <div
      className={styles.todo__item}
      onDoubleClick={() => deleteTodo(todo.id)}
    >
      <div className="todo__icon">
        <RiTodoFill />
      </div>
      <div className="todo__name">{todo.text}</div>
    </div>
  );
}
