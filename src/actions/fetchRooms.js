import roomlogo from '../person.png';

export default function fetchRooms() {
  // const getrooms =  fetch('/api/rooms').then(res => {
  //   return res.json()
  // }).then(res => {
  //   return res
  // })
  var payload = [
  {id:1, title:"beginnerJSRoom",logo:roomlogo,description:"For beginners who want to learn build react-redux apps",owner:"Ravi"},
  {id:2, title:"beginnerJSReactWithoutRedux",logo:roomlogo,description:"For beginners who want to learn build react-redux apps",owner:"Ravi"}
  ];
  return {type: "GET_ROOMS", payload:payload}
}

