import React from 'react';
import { Header, Icon, Image } from 'semantic-ui-react';
import logo from '../chat.png';
import '../App.css';

const FixedHeader = () => (
  <div>
    <Header as='h2' icon textAlign='center' image='https://ak2.picdn.net/shutterstock/videos/19023148/thumb/1.jpg'>
      <Icon name='users' size='huge' color ='orange' className='App-logo' />
      {/*<Icon name='chat rooms' circular className='App-logo' color='orange' />*/}
      <Header.Content className='headerText'>
       Coding Chat Rooms
      </Header.Content>
    </Header>
    
  </div>
)

export default FixedHeader