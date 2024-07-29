import React, { useState } from 'react';
import Login from './Components/Login_Page/Login';
import Registration from './Components/Registration/Registration';
import Welcome from './Components/Welcome_page/Welcome';

function App() {
  const [currentView, setCurrentView] = useState('register');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleRegistration = (username, password, email, phone, address) => {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);
    localStorage.setItem('address', address);
    setCurrentView('login');
  };

  const handleLogin = (username, password) => {
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');
    if (username === savedUsername && password === savedPassword) {
      setIsLoggedIn(true);
      setUsername(username);
    } else {
      alert('Invalid username or password');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentView('login');
  };

  const appStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    margin: 0,
    padding: '20px',
  };

  const buttonStyle = {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3',
  };

  if (isLoggedIn) {
    return <Welcome username={username} onLogout={handleLogout} />;
  }

  return (
    <div style={appStyle}>
      {currentView === 'login' ? (
        <Login onLogin={handleLogin} switchToRegister={() => setCurrentView('register')} />
      ) : (
        <Registration onRegister={handleRegistration} switchToLogin={() => setCurrentView('login')} />
      )}
      <button
        style={buttonStyle}
        onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
        onMouseOut={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
        onClick={() => setCurrentView(currentView === 'login' ? 'register' : 'login')}
      >
        {currentView === 'login' ? 'Switch to Register' : 'Switch to Login'}
      </button>
    </div>
  );
}

export default App;
