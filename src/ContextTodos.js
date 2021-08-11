import React, { createContext, useEffect, useState } from 'react';

export const TodoContext = createContext();

export const Context = (props) => {
  const [todos, setTodos] = useState([{ id: 1, title: 'Todo 1', completed: true }]);

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  }

  const removeTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos([...newTodos]);
  }
  const toggleTodo = (id) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos([...newTodos]);
  }

  useEffect(function getTodos() {
    const localTodos = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];
    setTodos([...localTodos]);
  }, []);

  useEffect(function addToLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos]);

  const value = {
    todos,
    addTodo,
    removeTodo,
    toggleTodo
  }

  return (
    <TodoContext.Provider value={value}>
      {props.children}
    </TodoContext.Provider>
  )
}
