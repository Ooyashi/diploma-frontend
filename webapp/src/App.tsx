import React from 'react';

import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams,
} from 'react-router-dom';
import { HomeComponent, LoginComponent, RegisterComponent } from './components';
import Header from './components/Header/header';
class App extends React.Component {
  render(): JSX.Element {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/login" component={LoginComponent} />
          <Route path="/register/:type" component={RegisterComponent} />
          <Route path="/" component={HomeComponent} />
        </Switch>
      </Router>
    );
  }
}

export default App;
