import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

//retrieves the userId from browser storage
const getProfile = () => {
  const storedData = localStorage.getItem('profile');
  return storedData ? JSON.parse(storedData) : null;
};

function EditTasksList() { // for now it only holds once task, later we will make a request and generate many tasks
  const [tasks, setTasks] = useState([]);  

  useEffect(() => {
    axios.get('http://localhost:8080/tasks/tasksbyuser/' + getProfile().userId)
    .then(response => setTasks(response.data))
    .catch(error => console.error(error));
  });
  
  return (
    <div className='taskListContainer'>
        <ul>
          {tasks.map(item => (
            <li key={crypto.randomUUID()}>{item.taskName} ------ from this goal: "{item.goal}"</li>
          ))}
      </ul>
    </div>
  )
}

export default EditTasksList;