import React from 'react';
import { useState } from 'react'
import type { TodoItem } from './types/Types';
import TodoList from './components/TodoList'

import './App.css'

function App() {

  return (
    <div className='Todo'>
      <TodoList />
    </div>
  );

}

export default App