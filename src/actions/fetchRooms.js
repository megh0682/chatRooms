import roomlogo from '../person.png';

export default function fetchRooms() {
  // const getrooms =  fetch('/api/rooms').then(res => {
  //   return res.json()
  // }).then(res => {
  //   return res
  // })
  var payload = [
    {id:1, title:"beginnerJSRoom",logo:roomlogo},
    {id:2, title:"beginnerJSReactWithoutRedux",logo:roomlogo}
  ];
  return {type: "GET_ROOMS", payload:payload}
}

