import React, { useContext } from 'react';
import { TodoContext } from "../ContextTodos";

const TodoItem = (props) => {
  const { toggleTodo, removeTodo } = useContext(TodoContext);
  const { id, title, completed } = props;
  const cls = ['collection-item'];
  if (completed) {
    cls.push('completed');
  }
  return (
    <div className={cls.join(' ')}>
      <h4 onClick={() => toggleTodo(id)}>{title}</h4>
      <button className="no-btn" onClick={() => removeTodo(id)}><i className="material-icons remove">remove_circle</i>
      </button>
    </div>
  );
};

export default TodoItem;
