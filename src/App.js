import './App.css';
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { Context } from "./ContextTodos";

function App() {
  return (
    <Context>
      <div className="App">
        <div className="header">
          <h2>Todos</h2>
        </div>
        <div className="main">
          <AddTodo/>
          <TodoList/>
        </div>
      </div>
    </Context>
  );
}

export default App;
