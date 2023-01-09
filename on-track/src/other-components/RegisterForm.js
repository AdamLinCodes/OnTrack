import React, { useState } from 'react';
import axios from 'axios';


function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async event => {
    event.preventDefault();
    console.log(`Username: ${username}`);
    console.log(`Password: ${password}`);
    console.log(`Email: ${email}`);
    // validate form values and submit them to the server
    try {
        const response = await axios.post('http://localhost:8080/users/add', {
          'username':username,
          'password':password,
          'email':email,
        });
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
  };
  

  return (
    <form onSubmit={handleSubmit}>
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
      <button type="submit">Log in</button>
    </form>
  );
}

export default RegisterForm;
