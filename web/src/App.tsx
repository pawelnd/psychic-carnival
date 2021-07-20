import './App.css';
import axios from 'axios';
import { useQuery } from 'react-query';
import MainLayout from './layouts/MainLayout/MainLayout';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import routes from './routes';
import { DashboardPage } from './pages/DashboardPage';
import { PrivatePage } from './pages/PrivatePage';

function App() {
  const { data } = useQuery('repoData', () => axios.get('/api/auth/me').then((resp) => resp.data));
  return (
    <MainLayout>
      <Router>
        <Switch>
          <Route path={routes.LOGIN} component={LoginPage} />
          <PrivateRoute exact path={routes.MAIN} component={DashboardPage} />
          <PrivateRoute path={routes.DASHBOARD} component={PrivatePage} />
        </Switch>
      </Router>
    </MainLayout>
  );
}

export default App;
