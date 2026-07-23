import React from 'react';
import { useState } from 'react'
import type { TodoItem } from './types/Types';

import './App.css'

function App() {
  const [todos, setTodos] = useState<TodoItem[]>([]); // Declare state variable (todos) and updater function (setTodos)
  const [input, setInput] = useState(''); 

  const addTodo = (text: string) => {
    const newTodo: TodoItem = {
      id: Date.now(),
      text,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);

    setInput("");
  }

  return (
    <div>
      <h1> My ToDo List</h1>

      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
      />

      <button onClick = {() => {addTodo(input)}}>      
        Click me
      </button>

      <p> You submitted {input}</p>

        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </ul>
    </div>


  );

}

export default App
