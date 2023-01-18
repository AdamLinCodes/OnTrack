import React from 'react';
import TaskForEdit from './TaskForEdit';

function EditTasksList() { // for now it only holds once task, later we will make a request and generate many tasks
  return (
    <div className='taskListContainer'>
      <TaskForEdit/>
    </div>
  )
}

export default EditTasksList;