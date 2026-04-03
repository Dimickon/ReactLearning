import { RiTodoFill, RiDeleteBin2Line } from 'react-icons/ri';
import { FaCheck } from 'react-icons/fa';
import styles from './TodoItem.module.css';

export default function TodoItem({ todo, deleteTodo, toggleTodo }) {
  return (
    <div
      className={`${styles.todoItem} ${
        todo.isCompleted ? styles.todoItemCompleted : ''
      }`}
    >
      <div className={styles.todoMain}>
        <div className={styles.todoHeading}>
          <RiTodoFill className={styles.todoIcon} />
          <div className={styles.todoName}>{todo.text}</div>
        </div>
      </div>
      <div className={styles.todoControll}>
        <RiDeleteBin2Line
          className={[styles.todoIcon, styles.todoIconDelete].join(' ')}
          onClick={() => deleteTodo(todo.id)}
        />
        <FaCheck
          className={[styles.todoIcon, styles.todoIconComplete].join(' ')}
          onClick={() => toggleTodo(todo.id)}
        />
      </div>
    </div>
  );
}
