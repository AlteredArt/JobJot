import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import Header from './layout/Header';
import Dashboard from './leads/Dashboard';
import Alerts from './layout/Alerts';
import Login from './accounts/Login';
import Register from './accounts/Register';
import PrivateRoute from './common/PrivateRoute';

//import the provider to give components access to the store.
import { Provider } from 'react-redux';
import store from '../store';
import { loadUser } from '../actions/auth';

const alertOptions = {
  timeout: 3000,
  position: 'top center'
};

//this is our main class of app
class App extends Component {

  componentDidMount() {
    if  (localStorage.token){
    loadUser( store.dispatch, store.getState );
  }
}

  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <Fragment>
              <Header />
              <Alerts />
                <Switch>
                  <PrivateRoute exact path='/' component={Dashboard} />
                  <Route exact path='/register' component={Register} />
                  <Route exact path='/login' component={Login} />
                </Switch>
            </Fragment>
          </Router>
        </AlertProvider>
      </Provider>
      )
  }
}

export default App;
