import React, { useState, useContext } from 'react';
import { TodoContext } from "../ContextTodos";

const AddTodo = () => {
  const [inputTodo, setInputTodo] = useState('');
  const { addTodo } = useContext(TodoContext);
  const newTodo = (e) => {
    if (inputTodo !== '' && e.key === 'Enter') {
      addTodo({
        id: +new Date(),
        title: inputTodo,
        completed: false
      });
      setInputTodo('');
    }
  }

  return (
    <div className="add-todo">
      <label htmlFor="add-todo">Add todo(Hit Enter)</label>
      <input type="text" value={inputTodo}
             onChange={(e) => setInputTodo(e.target.value)} id="add-todo"
             onKeyDown={(e) => newTodo(e)}
      />
    </div>
  );
};

export default AddTodo;
