import React, { useState } from 'react';

function TodoForm({ setTodos }) {
  const [text, setText] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos(prevTodos => [
      ...prevTodos,
      { text, dueDate, completed: false, id: Date.now() }
    ]);
    setText('');
    setDueDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Add todo"
        required 
      />
      <input 
        type="date" 
        value={dueDate} 
        onChange={(e) => setDueDate(e.target.value)} 
        required 
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default TodoForm;