import { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

export default function Todo() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (text) => {
    setTodos([...todos, text]);
  };

  return (
    <div>
      <TodoForm addTodo={addTodoHandler} />
      <TodoList todos={todos} />
    </div>
  );
}
