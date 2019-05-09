const fetch = require("isomorphic-fetch");
const axios = require("axios");

export const roomService = {
  getRoomService,
  getAll
};

function getAll() {
  console.log("roomService---->");
  return fetch("https://jsonplaceholder.typicode.com/users").then(
    // return fetch(
    //   "http://10.119.79.57:8080/reservation/allRoomBookingDetails/?checkInDate=04-03-2019&checkOutDate=04-04-2019"
    // ).then(
    // return fetch("https://jsonplaceholder.typicode.com/users=").then(
    handleResponse
  );
}

function getRoomService(checkInDate, checkOutDate) {
  console.log("roomService function---->");
  // let headers = {
  //   'Access-Control-Allow-Origin' : '*',
  //   'Content-type':'aplication/json',
  //   'Accept' : 'aplication/json'
  // };
  let request = "https://10.119.79.57:8443/reservation/allRoomBookingDetails/?checkInDate=" + `${checkInDate}` + "&checkOutDate=" + `${checkOutDate}`;
  console.log("Service call : Request : ", request);
  return axios.get(request);
}

function addEditEmployeeBooking(roomId, employee){
  let request = "https://10.119.79.57:8443/reservation/addEmployee";
  let payload = employee;
  return axios.post(request, payload);
}

function deleteEmployeeBooking(roomId, empID){
  //roomId should also sent for delete
  let request = "https://10.119.79.57:8/reservation/deleteEmployee/{empIdId}"+`${empID}`;
  return axios.delete(request);
}

function addRoom(room){
  let request = "https://10.119.79.57:8443/reservation/addRoomDetail";
  return axios.post(request, room);
}

function deleteRoom(roomID){
  let request = "https://10.119.79.57:8443/reservation/deleteRoomDetail/"+`${roomID}`;
  return axios.delete(request);
}



function handleResponse(response) {
  let checking = "";
  console.log("handleResponse method : ", response);
  setTimeout(response.text().then(text => {
    console.log("Converting to text : ", text);
    const data = text && JSON.parse(text);
    console.log("Service Data : ", data);
    if (data) {
      console.log("Returning data from roomService : ", data);
      checking = data;
      // return data;
    }
  }).error(error => { console.log("Service is throughing error : service is down : ", error) }), 10000);
  // setTimeout(10000);
  console.log("PLease chal ja: chekcing : ", checking);
  return checking;
}
