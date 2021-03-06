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
import EditProfile from './Pages/account/editProfile';
import Agent from './Pages/account/agent';
import EditAgent from './Pages/account/editAgent';
import CreateAgent from './Pages/account/createAgent';
import Campaign from './Pages/metrics/campaign';
import Conversations from './Pages/metrics/conversations';
import NewRecurring from './Pages/metrics/newRecurring';
import Audience from './Pages/metrics/audience';
import Geographical from './Pages/metrics/geographical';
import Leads from './Pages/leads';

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
        <Route exact path='/account-edit-profile' component={EditProfile} />
        <Route exact path='/agent' component={Agent} />
        <Route exact path='/edit-agent' component={EditAgent}/>
        <Route exact path='/create-agent' component={CreateAgent}/>
        <Route exact path='/metrics-campaign' component={Campaign}/>
        <Route exact path='/metrics-conversations' component={Conversations}/>
        <Route exact path='/metrics-newRecurring' component={NewRecurring}/>
        <Route exact path='/metrics-audience' component={Audience}/>
        <Route exact path='/metrics-geographical' component={Geographical}/>
        <Route exact path='/leads' component={Leads}/>
      </Switch>
    </div>
  );
}

export default App;
// https://reactchartjs.github.io/react-chartjs-2/#/