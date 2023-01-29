import React from 'react';
import editTaskImage from '../assets/editTask.png';
import removeTaskImage from '../assets/removeTask.png';

function TaskForEdit() {
  return (
    <div>
      <img src={removeTaskImage} alt="RemoveImage" />
      <img src={editTaskImage} alt="EditImage" />
      <div className="task">
        <p className="taskName">Task Example</p>
        <p className="taskDuration">2 hours</p>
      </div>
    </div>
  )
}

export default TaskForEdit