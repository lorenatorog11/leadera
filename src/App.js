import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Initial from './Pages/initial';
import RememberUser from './Pages/rememberUser';
import RememberPassword from './Pages/rememberPassword';
import RefreshPassword from './Pages/refreshPassword';
import HomePage from './Pages/homePage';
import Plan from './Pages/account/plan.js';
import Profile from './Pages/account/profile';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Initial} />
        <Route exact path='/remember-user' component={RememberUser} />
        <Route exact path='/remember-password' component={RememberPassword} />
        <Route exact path='/refresh-password' component={RefreshPassword} />
        <Route exact path='/home-page' component={HomePage} />
        <Route exact path='/account-plan' component={Plan} />
        <Route exact path='/account-profile' component={Profile} />
      </Switch>
    </div>
  );
}

export default App;