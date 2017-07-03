import {combineReducers} from  'redux';
import currentUser from './currentUserReducer';
import rooms from './rooms';

export default combineReducers({
 rooms,
 currentUser
});