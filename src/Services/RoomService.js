import axios from "axios";
const fetch = require("isomorphic-fetch");

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

function getRoomService() {
  return axios.get("https://jsonplaceholder.typicode.com/users");
}

// function getRoomService() {
//   console.log("roomService function---->");
//   return (
//     fetch("https://jsonplaceholder.typicode.com/users")
//       // return fetch(
//       //   "https://10.119.79.57:8443/reservation/allRoomBookingDetails/?checkInDate=04-03-2019&checkOutDate=04-04-2019"
//       .then(handleResponse)
//   );
// }

function handleResponse(response) {
  console.log("handleResponse method : ", response);

  response.text().then(text => {
    const data = text && JSON.parse(text);
    console.log("Service Data : ", data);
    if (data) {
      return data;
    }
  });
}
