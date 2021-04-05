import React from 'react';

import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { HomeComponent, LoginComponent, RegisterComponent } from './components';

class App extends React.Component {
  render(): JSX.Element {
    return (
      <Router>
        <div>
          <h2>Welcome to my webpage!</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
              <li>
                <Link to={'/'} className="nav-link">
                  {' '}
                  Home{' '}
                </Link>
              </li>
              <li>
                <Link to={'/login'} className="nav-link">
                  Login
                </Link>
              </li>
              <li>
                <Link to={'/register'} className="nav-link">
                  Register
                </Link>
              </li>
            </ul>
          </nav>
          <hr />
          <Switch>
            <Route path="/login" component={LoginComponent} />
            <Route path="/register" component={RegisterComponent} />
            <Route path="/" component={HomeComponent} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
