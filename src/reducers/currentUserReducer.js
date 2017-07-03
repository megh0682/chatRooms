import initialState from './initialState'
export default function currentUserReducer(state=initialState, action) {
  switch(action.type) { 
    case 'ASSIGN_USERNAME': 
      sessionStorage.setItem('currentUser', action.payload);
      state = {...state,currentUser:action.payload};
      return state
      //return action.payload;
    default:
       return  state;
  }
}