import './App.css';
import axios from 'axios';
import { useQuery } from 'react-query';

function App() {
  const { isLoading, data } = useQuery('repoData', () => axios.get('/api/auth/me').then((resp) => resp.data));
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
