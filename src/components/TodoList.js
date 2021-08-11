import React, { useContext } from 'react';
import { TodoContext } from "../ContextTodos";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos } = useContext(TodoContext);
  return (
    <div className="todos-list">
      {todos.length ? <ul className="collection">
        {todos.map(todo => {
          return <TodoItem key={todo.id} {...todo}/>
        })}
      </ul> : <h2>No todos...</h2>}
    </div>
  );
};

export default TodoList;
