import React from 'react'

function HomePageComponent() {
  return (
    <div className='homeMenuContainer'>
      <div className='homeTitleContainer'>
        <h1>ON-TRACK</h1>
        <h2>Welcome!</h2>
        <h2>Let's not waste any time</h2>
      </div>
      <button className='homePageButton'>Today</button>
      <button className='homePageButton'>Set Goals</button>
      <button className='homePageButton'>Track Progress</button>
    </div>
  )
}

export default HomePageComponent