import { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

export default function Todo() {
  const [todos, setTodos] = useState(['todo 1', 'todo 2']);

  return (
    <div>
      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} />
    </div>
  );
}
