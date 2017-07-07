import faker from 'faker';
import roomlogo from '../person.png';
const initialState = {
  availableRooms: [{id:1, title:"beginnerJSRoom",logo:roomlogo,description:"For beginners who want to learn build react-redux apps",owner:"Ravi"},
  {id:2, title:"beginnerJSReactWithoutRedux",logo:roomlogo,description:"For beginners who want to learn build react-redux apps",owner:"Ravi"}
  ],
  currentUser: faker.internet.userName(),
  isAuthenticated: false,
  user: {}
    
};

export default initialState;