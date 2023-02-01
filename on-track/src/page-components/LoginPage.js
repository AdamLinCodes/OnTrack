import React from 'react';
import LoginForm from '../other-components/LoginForm'
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <div className='menuContainer'>
      <div className='titleContainer'>
        <h1>ON-TRACK</h1>
        <h2>Let's not waste any time and get registered!</h2>
      </div>
      <LoginForm/>
      <hr/>
      <h3 className="needRegister">
        Don't have an account? Then&nbsp;
        <Link to='/register' className='registerLink'>Register</Link>
      </h3>
    </div>
  )
}

export default LoginPage;