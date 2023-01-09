import React from 'react';
import { Link } from 'react-router-dom';

function MainPage() {
  return (
    <div className='menuContainer'>
      <div className='titleContainer'>
        <h1>ON-TRACK</h1>
        <h2>Welcome!</h2>
        <h2>Let's not waste any time</h2>
      </div>

      <div className='buttonContainer'>
        <Link to='/login'><button className='button'>Login</button></Link>
      </div>

      <div className='buttonContainer'>
      <Link to='/register'><button className='button'>Register</button></Link>
      </div>
    </div>
  )
}

export default MainPage;