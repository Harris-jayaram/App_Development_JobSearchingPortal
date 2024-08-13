import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import CryptoJS from 'crypto-js'; // Import crypto-js for encryption
import '../../Assest/css/Login.css';

function Login({ onLogin, switchToRegister }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const secretKey = 'DWnN2JPlmIimWXd3ZJWJtQ9mQOggGynoZpLCtvrGr/M='; // Use a strong secret key for encryption

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:8080/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const token = await response.text(); // Assuming the token is returned as plain text
      sessionStorage.setItem('token', token); // Store the token in session storage

      // Encrypt the password and store it in localStorage
      const encryptedPassword = CryptoJS.AES.encrypt(password, secretKey).toString();
      localStorage.setItem('encryptedPassword', encryptedPassword);

      onLogin(username, password); // Call the onLogin function
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="login-form-container">
      <h2>Login</h2>
      <FontAwesomeIcon icon={faUserCircle} className="user-icon" />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <center><button type="submit">Login</button></center>
      </form>
      {/* <button className="switch-button" onClick={switchToRegister}>Switch to Register</button> */}
    </div>
  );
}

export default Login;
