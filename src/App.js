import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { Button, Image, List,Menu } from 'semantic-ui-react';
import LandingPage from './components/LandingPage';
import HomePage from './components/HomePage';
import ChatRoomList from './components/ChatRoomList';
import ChatRoomDetails from './components/ChatRoomDetails';
import FixedHeader from './components/FixedHeader';
import FixedMenu from './components/FixedMenu';
import logo from './chat.png';
import './App.css';

class App extends Component {
  render() {
    return (
  <div className="App">
    <div className="App-header">
        <FixedHeader/>
    </div>
    <div className="App-Intro">
        <FixedMenu/>  
    </div>

  <Route exact path="/" component={LandingPage} />
  <Route exact path="/rooms" component={HomePage} />
  <Route path="/rooms/:id" component={ChatRoomDetails} />        

  </div>
    );
  }
}

export default App;
