import React, { useState } from 'react';

function TodoItem({ todo, setTodos }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const toggleComplete = () => {
    setTodos(prevTodos => prevTodos.map(t => t.id === todo.id ? { ...t, completed: !t.completed } : t));
  };

  const handleDelete = () => {
    setTodos(prevTodos => prevTodos.filter(t => t.id !== todo.id));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setTodos(prevTodos => prevTodos.map(t => t.id === todo.id ? { ...t, text: newText } : t));
    setIsEditing(false);
  };

  return (
    <li style={{ backgroundColor: new Date(todo.dueDate) < new Date() ? 'red' : 'white' }}>
      {isEditing ? (
        <input value={newText} onChange={(e) => setNewText(e.target.value)} />
      ) : (
        <span onClick={toggleComplete} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          {todo.text} (due: {todo.dueDate})
        </span>
      )}
      {isEditing ? (
        <button onClick={handleSave}>Save</button>
      ) : (
        <button onClick={handleEdit}>Edit</button>
      )}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default TodoItem;