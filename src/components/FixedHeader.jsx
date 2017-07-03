import React from 'react';
import { Header, Icon, Image } from 'semantic-ui-react';
import logo from '../chat.png';

const FixedHeader = () => (
  <div>
    <Header as='h2' icon textAlign='center'>
      <Icon name='chat rooms' circular />
      <Header.Content>
       Coding Chat Rooms
      </Header.Content>
    </Header>
    
  </div>
)

export default FixedHeader