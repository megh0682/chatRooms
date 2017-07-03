import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import ChatRoomList from './ChatRoomList';
import UserName from './UserName';
import PropTypes from 'prop-types';
import * as fetchRooms from '../actions/fetchRooms';
import * as assignUserName from '../actions/assignUserName';

class HomePage extends React.Component {

  componentDidMount(){

        //alert(this.props.userName);
        //alert(this.props.rooms.length);
        if(this.props.rooms.length == 0){
          console.log("I am going to fetchRooms");
          this.props.actions.fetchRooms()
        }
     
  }
  chooseUserName(userName) {
    this.props.actions.assignUserName(userName);
  }

  render() {
    return (
    <div>
      <h1>Welcome! Join any room as {this.props.userName} or enter your avatar name </h1>
      <UserName userName={this.props.userName} chooseUserName={this.chooseUserName.bind(this)}/>
      <br/>
      <ChatRoomList rooms = {this.props.rooms}/>
    </div>
    );
  }
}

function mapStateToProps(state){

//  var obj = state.rooms.availableRooms;
//   for(var prop in obj){
//     alert(`state.${prop} = ${obj[prop]}`);
//   }

//   alert((state.rooms.availableRooms).length);

  // alert("mapStateToProps"+state.currentUser + " : "
  // + typeof(state.availableRooms));

  return{ rooms:state.rooms.availableRooms,
          userName: state.currentUser }

}

function mapDispatchToProps(dispatch) {

  return {actions: bindActionCreators(Object.assign(fetchRooms,assignUserName), dispatch)}

}

HomePage.propTypes = {
  rooms: PropTypes.array.isRequired,
  fetchRooms:PropTypes.func.isRequired,
  assignUserName:PropTypes.func.isRequired,
  userName:PropTypes.string.isRequired

};

export default connect(mapStateToProps,mapDispatchToProps)(HomePage);