import { useState } from 'react';
import styles from './Todo.module.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

export default function Todo() {
  const [todos, setTodos] = useState(['todo 1', 'todo 2', 'todo 3']);

  const addTodoHandler = (text) => {
    setTodos([...todos, text]);
  };

  const deleteTodoHandler = (index) => {
    setTodos(todos.filter((todo, i) => i !== index));
  };

  return (
    <div className={styles.todo}>
      <h2 className={styles.todo__heading}>Todo app v1</h2>
      <TodoForm addTodo={addTodoHandler} />
      <TodoList todos={todos} deleteTodo={deleteTodoHandler} />
    </div>
  );
}
