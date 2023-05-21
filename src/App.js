import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import BrowserRouter from 'react-router-dom/BrowserRouter'

const App = () => {
  const initialState = JSON.parse(localStorage.getItem('todos')) || [];
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);
  

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="container d-flex flex-column align-items-center">
      <h1 className="my-4">Todo-List</h1>
      <div>
        <TodoForm
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
        />
      </div>
      <div>
        <TodoList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} />
      </div>
    </div>
  );
};

export default App;
