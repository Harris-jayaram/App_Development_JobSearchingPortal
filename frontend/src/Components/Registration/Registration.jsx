import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faUser, faLock, faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';
import "../../Assest/css/Registration.css";

function Registration({ onRegister, switchToLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Store user data in localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);
    localStorage.setItem('address', address);

    // You can also send this data to the backend if needed
    const response = await fetch('http://localhost:8080/api/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password, email, phone, address })
    });

    if (response.ok) {
      onRegister(username, password, email, phone, address);
    } else {
      alert('Failed to register');
    }
  };

  const handleGoogleSignIn = () => {
    window.open('https://accounts.google.com/signin', '_blank');
  };

  const handleGithubSignIn = () => {
    window.open('https://github.com/login', '_blank');
  };

  return (
    <div className="registration-form-container">
      <h2>Register</h2>
      <FontAwesomeIcon icon={faUserPlus} className="user-icon" />
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <FontAwesomeIcon icon={faUser} className="input-icon" />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-container">
          <FontAwesomeIcon icon={faLock} className="input-icon" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="input-container">
          <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-container">
          <FontAwesomeIcon icon={faPhone} className="input-icon" />
          <input
            type="tel"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="input-container">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="input-icon" />
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <center><button type="submit">Register</button></center>
      </form>
      <button className="switch-button" onClick={switchToLogin}>Switch to Login</button>
      <div className="social-signin">
        <FontAwesomeIcon icon={faGoogle} className="social-icon" onClick={handleGoogleSignIn} />
        <FontAwesomeIcon icon={faGithub} className="social-icon" onClick={handleGithubSignIn} />
      </div>
    </div>
  );
}

export default Registration;
