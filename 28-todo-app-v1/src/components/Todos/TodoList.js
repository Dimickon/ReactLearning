import TodoItem from './TodoItem';
import styles from './TodoList.module.css';

export default function TodoList(props) {
  const { todos } = props;

  return (
    <div className={styles.todo__list}>
      {todos ? <h1>Список пуст</h1> : <h1>Список не пуст</h1>}
    </div>
  );
}
