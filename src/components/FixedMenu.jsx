import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { Menu } from 'semantic-ui-react'

export default class FixedMenu extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu widths="four" inverted>
        <Menu.Item
          as={Link} to='/rooms'
          name='Home'
          className='menuItem'
           color='orange'
          active={activeItem === 'Home'}
          onClick={this.handleItemClick}
        >
         All Rooms
        </Menu.Item>

        <Menu.Item
          name='Add Room'
          color='orange'
          className='menuItem'
          active={activeItem === 'Add Room'}
          onClick={this.handleItemClick}
        >
          Add Room
        </Menu.Item>

        <Menu.Item
          name='New User Signup'
          as={Link} to='/signup'
          color='orange'
          className='menuItem'
          active={activeItem === 'New User Signup'}
          onClick={this.handleItemClick}
        >
          New User Signup
        </Menu.Item>

        <Menu.Item
          name='Login'
          as={Link} to='/login'
        className='menuItem'
          active={activeItem === 'Login'}
           color='orange'
          onClick={this.handleItemClick}
        >
         Login
        </Menu.Item>
      </Menu>
    )
  }
}