import React, { useState } from 'react';


function TaskInput() {

  const [addTask, setAddTask] = useState('');

  const handleSubmit =  event => {
    event.preventDefault();
  }

  return (
      <form className='addTaskContainer' onSubmit={handleSubmit}>
        <label>Add a Task:</label>
        <input 
          type="text"
          id="addTaskId"
          value={addTask}
          onChange={event => setAddTask(event.target.value)}
        ></input>
        
        <button className="addButton" type="submit">Add</button>
      </form>
  )
}

export default TaskInput;