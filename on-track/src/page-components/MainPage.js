import React from 'react'
import { Link } from 'react-router-dom'; 

function MainPage() {
  return (
    <div className='homeMenuContainer'>
      <div className='homeTitleContainer'>
        <h1>ON-TRACK</h1>
        <h2>Welcome!</h2>
        <h2>Let's not waste any time</h2>
      </div>

      <div className='homePageButtonContainer'>
        <Link to='/login'><button className='homePageButton'>Login</button></Link>
      </div>

      <div className='homePageButtonContainer'>
        <button className='homePageButton'>Register</button>
      </div>
    </div>
  )
}

export default MainPage