import React from 'react';
import { useState, useEffect } from 'react';
import TaskDao from '../../daos/tasks.dao';

const taskDao = new TaskDao();

function EditTasksList() { // for now it only holds once task, later we will make a request and generate many tasks
  const [tasks, setTasks] = useState([]);  

  useEffect(() => {
    async function fetchData() {
      const data = await taskDao.getAll();
      setTasks(data);
    }
    fetchData();
  }, [tasks]);
  
  return (
    <div className='taskListContainer'>
        <ul>
          {tasks.map(item => (
            <li key={crypto.randomUUID()}>{item.taskName}</li>
          ))}
      </ul>
    </div>
  )
}

export default EditTasksList;