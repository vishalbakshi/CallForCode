import React, { Component } from 'react';
import { BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import WildfireSurvivorApp from "../WildfireSurvivorApp";
import WildfireSurvivorDashboard from "../WildfireSurvivorDashboard";

import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';



const App = () => (

  <Router>
    <div>
      <Navigation />

      <hr />

      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route exact path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
      <Route exact path={ROUTES.HOME} component={HomePage} />
      <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route exact path={ROUTES.ADMIN} component={AdminPage} />
      <Route exact path={ROUTES.APPLICATION} component={WildfireSurvivorApp} />
      <Route exact path={ROUTES.DASHBOARD} component={WildfireSurvivorDashboard} />
    </div>
  </Router>
);

export default withAuthentication(App);