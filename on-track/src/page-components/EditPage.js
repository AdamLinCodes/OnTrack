import React from 'react';
import '../styles/edit.css';
import EditForm from '../other-components/EditPage-components/EditForm'

function EditPage() {
  return (
    <div className='menuContainer'>
      <div className='titleContainer'>
        <h1>Edit your tasks</h1>
        <h2>But try not to abandon your goals :(</h2>
      </div>
      <EditForm/>
    </div>
  )
}

export default EditPage;