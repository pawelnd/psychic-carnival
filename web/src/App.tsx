import './App.css';
import MainLayout from './layouts/MainLayout/MainLayout';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import routes from './routes';
import { DashboardPage } from './pages/DashboardPage';
import { PrivatePage } from './pages/PrivatePage';

function App() {
  return (
    <MainLayout>
      <Router>
        <Switch>
          <Route exact path={routes.MAIN} component={DashboardPage} />
          <Route path={routes.LOGIN} component={LoginPage} />
          <PrivateRoute path={routes.PRIVATE} component={PrivatePage} />
        </Switch>
      </Router>
    </MainLayout>
  );
}

export default App;
