import initialState from './initialState'

export default function rooms(state=initialState,action){

switch (action.type) {
      case 'GET_ROOMS':
      // alert("GET_ROOMS"+ state.availableRooms.length);
       state = {...state,availableRooms:action.payload}; 
       return state;

      case 'GET_ROOM_BY_ID':
        return action.payload; 

      default:
       // alert("DEFAULT"+state.availableRooms.length);
        return state;
}


}


