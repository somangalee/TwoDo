import React from 'react';
import { useState } from 'react'
import type { TodoItem } from './types/Types';

function App() {
  const [todos, setTodos] = useState<TodoItem[]>([]); // Declare state variable (todos) and updater function (setTodos)
  const [input, setInput] = useState(''); 

  // Add new Todo 
  const addTodo = (text: string) => {
    const newTodo: TodoItem = {
      id: Date.now(),
      text,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);

    setInput("");
  }

  // Delete Todo
  const removeItemById = (id: number) => {
    // Keep all items EXCEPT the one that matches the target id
    setTodos(todos.filter((todos) => todos.id !== id));
  };

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
            <li key={todo.id}>{todo.text}
              <button onClick = {() => removeItemById(todo.id)}>Delete</button>
            </li>

          ))}
        </ul>
    </div>


  );

}

export default App


