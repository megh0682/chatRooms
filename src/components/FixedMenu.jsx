import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { Menu } from 'semantic-ui-react'

export default class FixedMenu extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item
          as={Link} to='/rooms'
          name='Home'
          active={activeItem === 'Home'}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>

        <Menu.Item
          name='Add Room'
          active={activeItem === 'Add Room'}
          onClick={this.handleItemClick}
        >
          Add Room
        </Menu.Item>

        <Menu.Item
          name='Active Rooms'
          active={activeItem === 'Active Rooms'}
          onClick={this.handleItemClick}
        >
         Active Rooms
        </Menu.Item>
      </Menu>
    )
  }
}