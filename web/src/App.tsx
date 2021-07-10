import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [user, setUser] = useState({});
  useEffect(() => {
    axios.get('/api/auth/me').then(({ data }) => {
      setUser(data);
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Current user: {JSON.stringify(user)}</p>
        <a className="App-link" href="/api/auth/facebook">
          LOGIN
        </a>
        <a className="App-link" href="/api/auth/logout">
          Logout
        </a>
      </header>
    </div>
  );
}

export default App;
