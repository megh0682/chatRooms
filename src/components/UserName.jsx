import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import ChatRoomList from './ChatRoomList';
import PropTypes from 'prop-types';
import * as fetchRooms from '../actions/fetchRooms';
import {input} from 'semantic-ui-react';

class UserName extends React.Component {

 constructor(props){
     super(props);
     this.state={userName:'',editing:false}
 }

  triggerChooseUserName(e) {
    e.preventDefault()
    this.props.chooseUserName(this.state.userName)
    this.setState({editing: false})
  }

  updateState(e) {
    this.setState({userName: e.target.value})
  }

  toggleEditing(e) {
    e.preventDefault()
    this.setState({editing: true})
  }

  editForm() {
    return (
    <form class="ui form">
    <div class="field" floated="left">
        <label>Username: </label>
        <input type="text" name="userName" placeholder="username"defaultValue={this.props.userName} onChange={this.updateState.bind(this)}/>
    </div>
    <br/>
    <button class="ui button" floated ="right" type="submit" onClick={this.triggerChooseUserName.bind(this)}>Submit</button>
    </form>
    )
  }

  editButton() {
    return (
 <form class="ui form">
  <div class="field"floated ="left">
    <label>Username: </label>
    <input type="text" name="userName" placeholder="username" defaultValue={this.props.userName} disabled/>
  </div>
  <br/>
  <button class="ui button" floated ="right" type="click to enter your avatar name" onClick={this.toggleEditing.bind(this)}>click to enter your avatar name</button>
 </form>
   )
  }

  render() {  
    return (
      <div>
        {this.state.editing ? this.editForm() : this.editButton()}
      </div>
    )
  }
}

export default UserName;