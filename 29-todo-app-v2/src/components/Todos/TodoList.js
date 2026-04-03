import TodoItem from './TodoItem';
import styles from './TodoList.module.css';

export default function TodoList({
  todos,
  deleteTodo,
  toggleTodo,
  completedTodosCount,
}) {
  return (
    <div className={styles.todo__list}>
      {!todos.length && <h2>Todo list is empty</h2>}
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      ))}
      {completedTodosCount > 0 && (
        <h2>{`You have completed ${completedTodosCount} ${
          completedTodosCount > 1 ? 'todos' : 'todo'
        }`}</h2>
      )}
    </div>
  );
}
