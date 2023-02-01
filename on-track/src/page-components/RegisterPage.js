import React from 'react';
import RegisterForm from '../other-components/RegisterForm';
import { Link } from 'react-router-dom';

function RegisterPage() {
  return (
    <div>
      <div className='menuContainer'>
        <div className='titleContainer'>
          <h1>ON-TRACK</h1>
          <h2>Let's not waste any time and get registered!</h2>
        </div>
        <RegisterForm/>
        <hr></hr>
        <h3 className="needLogin">
          If you already have an account then&nbsp;
          <Link to='/'>Login</Link>
        </h3>
      </div>
    </div>
  )
}

export default RegisterPage;