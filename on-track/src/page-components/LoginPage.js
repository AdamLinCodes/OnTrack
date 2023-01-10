import React from 'react';
import LoginForm from '../other-components/LoginForm'

function LoginPage() {
  return (
    <div>
      <div className='menuContainer'>
        <div className='titleContainer'>
          <h1>ON-TRACK</h1>
          <h2>Let's not waste any time and get registered!</h2>
        </div>
        <LoginForm/>
        <hr></hr>
        <h3 class="alreadyLogin">If you forg</h3>
        <div className='buttonContainer'>
          <Link to='/login'><button className='button'>Login</button></Link>
        </div>

      </div>
    </div>
  )
}

export default LoginPage;