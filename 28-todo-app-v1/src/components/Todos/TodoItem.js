import styles from './TodoItem.module.css';

export default function TodoItem({ todo }) {
  return (
    <div className={styles.todo__item}>
      <div className="todo__icon">1</div>
      <div className="todo__name">{todo}</div>
    </div>
  );
}
