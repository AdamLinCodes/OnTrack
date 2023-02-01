import React from 'react';
import ToDoForm from '../other-components/ToDoForm';

function ToDoPage() {
  return (
    <div className='menuContainer'>
      <div className='titleContainer'>
        <h1>ON-TRACK</h1>
        <h2>To-Do Page!</h2>
      </div>
      <ToDoForm/>
    </div>
    
  )
}

export default ToDoPage;