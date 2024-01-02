// Todo.js
import React from 'react';

const Todo = ({ todo, toggleComplete, removeTodo }) => {
  const addedTime = new Date(todo.id).toLocaleTimeString();

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', margin: '8px' }}>
      <div style={{ textDecoration: todo.completed ? 'line-through' : '' }}>
        {todo.text} - Added at {addedTime}
      </div>
      <div>
        <button style={{ color: 'green' }} onClick={() => toggleComplete(todo.id)}>
          Complete
        </button>
        <button style={{ color: 'red' }} onClick={() => removeTodo(todo.id)}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default Todo;
