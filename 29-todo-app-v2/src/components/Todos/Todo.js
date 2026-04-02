import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './Todo.module.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const LOCAL_STORAGE_KEY = 'todos';

export default function Todo() {
  const [todos, setTodos] = useState(() => {
    const saveTodos = localStorage.getItem(LOCAL_STORAGE_KEY);

    return saveTodos ? JSON.parse(saveTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  });

  const addTodoHandler = (text) => {
    const newTodo = {
      id: uuidv4(),
      text,
      isCompleteed: false,
    };
    console.log(newTodo);
    setTodos([...todos, newTodo]);
  };

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className={styles.todo}>
      <h2 className={styles.todo__heading}>Todo app v1</h2>
      <TodoForm addTodo={addTodoHandler} />
      <TodoList todos={todos} deleteTodo={deleteTodoHandler} />
    </div>
  );
}
