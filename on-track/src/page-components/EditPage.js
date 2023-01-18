import React from 'react';
import '../styles/edit.css';

function EditPage() {

    
  return (
    <div className='menuContainer'>
      <div className='titleContainer'>
        <h1>ON-TRACK</h1>
        <h2>Edit your Tasks!</h2>
      </div>
      <EditForm/>
    </div>
  )
}

export default EditPage;