import React from 'react';
import ToDoItem from './ToDoItem';

function App() {
  return (
    <div className="container mx-auto m-10 py-10 bg-gray-900">
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
    </div>
  );
}

export default App;
