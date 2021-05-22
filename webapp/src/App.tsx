import React from 'react';

import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams,
} from 'react-router-dom';
import {
  CartComponent,
  CheckoutComponent,
  HomeComponent,
  LoginComponent,
  ProductListsComponent,
  RegisterComponent,
} from './components';

class App extends React.Component {
  render(): JSX.Element {
    return (
      <Router>
        {/* <Header /> */}
        <Switch>
          {/* <Route exact path="/admin" component={AdminComponent} /> */}
          <Route exact path="/catalogue" component={ProductListsComponent} />
          <Route exact path="/cart" component={CartComponent} />
          <Route exact path="/checkout" component={CheckoutComponent} />
          <Route path="/login" component={LoginComponent} />
          <Route path="/register/Client" component={RegisterComponent} />
          <Route path="/" component={HomeComponent} />
        </Switch>
      </Router>
    );
  }
}

export default App;
