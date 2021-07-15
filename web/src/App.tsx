import './App.css';
import axios from 'axios';
import { useQuery } from 'react-query';
import MainLayout from './layouts/MainLayout/MainLayout';

function App() {
  const { isLoading, data } = useQuery('repoData', () => axios.get('/api/auth/me').then((resp) => resp.data));
  return (
    <MainLayout>
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
    </MainLayout>
  );
}

export default App;
