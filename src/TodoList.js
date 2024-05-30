import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, setTodos, filter }) {
  const filteredTodos = todos.filter(todo => {
    if (filter === 'incomplete') return !todo.completed;
    if (filter === 'complete') return todo.completed;
    return true;
  });

  return (
    <ul>
      {filteredTodos.map(todo => (
        <TodoItem key={todo.id} todo={todo} setTodos={setTodos} />
      ))}
    </ul>
  );
}

export default TodoList;