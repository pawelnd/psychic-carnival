import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

export const LoginPage = () => {
  const { isLoading, data } = useQuery('repoData', () => axios.get('/api/auth/me').then((resp) => resp.data));
  return (
    <header className="App-header">
      <p>isLoading: {JSON.stringify(isLoading)}</p>
      <p>Current user: {JSON.stringify(data)}</p>
      <a className="App-link" href="/api/auth/facebook">
        Login
      </a>
      <a className="App-link" href="/api/auth/logout">
        Logout
      </a>
    </header>
  );
};
