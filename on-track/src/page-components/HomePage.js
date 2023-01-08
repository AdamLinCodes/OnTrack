import React from 'react';

function HomePageComponent() {
  return (
    <div className='homeMenuContainer'>
      <div className='homeTitleContainer'>
        <h1>ON-TRACK</h1>
        <h2>Welcome!</h2>
        <h2>Let's not waste any time</h2>
      </div>
      <div className='homePageButtonContainer'><button className='homePageButton'>Today</button></div>
      <div className='homePageButtonContainer'><button className='homePageButton'>Set Goals</button></div>
      <div className='homePageButtonContainer'><button className='homePageButton'>Track Progress</button></div>
    </div>
  )
}

export default HomePageComponent;