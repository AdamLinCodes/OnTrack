import React from 'react';
import '../styles/home.css';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className='menuContainer'>
      <div className='titleContainer'>
        <h1>ON-TRACK</h1>
        <h2>Welcome!</h2>
        <h2>Let's not waste any time</h2>
      </div>

      <div className='buttonContainer'>
        <Link to='/todo'> <button className='button'>Todo</button></Link>
      </div>

      <div className='buttonContainer'>
        <button className='button'>Stats/Analytics</button>
      </div>

      <div className='buttonContainer'>
      <Link to='/edit'><button className='button'>Edit</button></Link>
      </div>
    </div>
  )
}

export default HomePage;