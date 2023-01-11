import React, { useState } from 'react';
import axios from 'axios';
import '../styles/register.css';


function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');


  const handleSubmit = async event => {
    event.preventDefault();
    console.log(`Username: ${username}`);
    console.log(`Password: ${password}`);
    console.log(`Email: ${email}`);
    console.log(`Birthday: ${birthday}`);

    // validate form values and submit them to the server
    try {
        const response = await axios.post('http://localhost:8080/users/add', {
          'username':username,
          'password':password,
          'email':email,
          'birthday':birthday,
        });
        document.location.href = '/home';
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
  };
  

  return (
    <form className="registerForm" onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={event => setUsername(event.target.value)}
      />
      <br />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={event => setPassword(event.target.value)}
      />
      <br />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={event => setEmail(event.target.value)}
      />
      <br />
      <label htmlFor="birthday">Birthday:</label>
      <input
        type="date"
        id="birthday"
        value={birthday}
        onChange={event => setBirthday(event.target.value)}
      />
      <br />
      <div className="buttonContainer">
        <button type="submit" className='button'>Register</button>
      </div>
    </form>
    
  );
}

export default RegisterForm;
