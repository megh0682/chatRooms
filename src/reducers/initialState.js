import faker from 'faker';
import roomlogo from '../person.png';
const initialState = {
  availableRooms: [{id:1, title:"beginnerJSRoom",logo:roomlogo},
  {id:2, title:"beginnerJSReactWithoutRedux",logo:roomlogo}
  ],
  currentUser: faker.internet.userName()
};

export default initialState;