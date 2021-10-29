import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import Auth from '../views/authentication/Auth';
import Home from '../views/home/Home';
import PrivateRoute from './PrivateRoute';

export default function Routes() {
  return (
    <Router>
      <Switch>
        {/* <Redirect exact from='/' to={'/auth'} /> */}
        <Route path='/auth'>
          <Auth />
        </Route>
        <PrivateRoute component={Home} path='/' exact layout={Layout} />
      </Switch>
    </Router>
  );
}
