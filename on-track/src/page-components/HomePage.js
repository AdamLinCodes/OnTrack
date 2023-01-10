import React from 'react';

function HomePage() {
  return (
    <div className='menuContainer'>
      <div className='titleContainer'>
        <h1>ON-TRACK</h1>
        <h2>Welcome!</h2>
        <h2>Let's not waste any time</h2>
      </div>

      <div className='buttonContainer'>
        <button className='button'>Todo</button>
      </div>

      <div className='buttonContainer'>
        <button className='button'>Stats/Analytics</button>
      </div>

      <div className='buttonContainer'>
        <button className='button'>Edit Goals</button>
      </div>
    </div>
  )
}

export default HomePage;