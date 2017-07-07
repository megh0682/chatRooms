import React from 'react';
import { Link, Route,BrowserRouter as Router,Switch,Redirect} from 'react-router-dom';
import App from './App';
import HomePage from './components/HomePage';
import LandingPage from './components/LandingPage';
import ChatRoomDetails from './components/ChatRoomDetails';
import Page404 from './components/Page404';
import SignupPage from './components/signup/SignupPage';
import LoginPage from './components/login/LoginPage';

const Routes = () =>  (
  

  <div>
    <Switch>
      <Route exact path="/" exact component={HomePage}/>
      <Route exact path="/rooms" component={HomePage}/>
      <Route exact path= "/signup" component={SignupPage} />
      <Route  exact path="/login" component={LoginPage} />
      <Redirect from="/futurerooms" to="/rooms"/>
      <Route exact path="/rooms/:id" component={ChatRoomDetails} />
      <Route component={Page404}/>
    </Switch>
  </div>  
  )

export default Routes;