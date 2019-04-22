// import roomService from ""
import { roomService } from "../Services/RoomService";
import { config } from "../Configs/Config";
export function setRoomsFlagAction(
  roomFlag,
  addRoomFlag,
  editFlag,
  successFlag,
  addOrUpdate
) {
  console.log(
    "Action : SET_ROOMS_FLAG",
    roomFlag,
    addRoomFlag,
    editFlag,
    successFlag,
    addOrUpdate
  );
  return {
    type: "SET_ROOMS_FLAG",
    payload: {
      addRoomFlag: addRoomFlag,
      roomFlag: roomFlag,
      editFlag: editFlag,
      successFlag: successFlag,
      addOrUpdate: addOrUpdate
    }
  };
}

// export function getAll() {
//   console.log("Action getAll");
//   if (config.service) {
//     return dispatch => {
//       // dispatch(request());

//       roomService
//         .getAll()
//         .then(
//           response => dispatch(success(response)),
//           error => dispatch(failure(error.toString()))
//         );
//     };

//     // function request() {
//     //   return { type: "GETALL_REQUEST" };
//     // }
//     function success(users) {
//       console.log("success action ", users);
//       return { type: "GETALL_SUCCESS", users };
//     }
//     function failure(error) {
//       console.log("error action ", error);
//       return { type: "GETALL_FAILURE", error };
//     }
//   } else {
//     console.log("Else : Action getRoomService");

//     return { type: "GETALL_SUCCESS", payload: users };
//   }
// }

// export function getRoomService() {
//   console.log("roomService function---->");
//   return (
//     fetch("https://jsonplaceholder.typicode.com/users")
//       // return fetch(
//       //   "https://10.119.79.57:8443/reservation/allRoomBookingDetails/?checkInDate=04-03-2019&checkOutDate=04-04-2019"
//       .then(handleResponse)
//   );
// }

// function handleResponse(response) {
//   console.log("handleResponse method : ", response);

//   response.text().then(text => {
//     const data = text && JSON.parse(text);
//     console.log("Service Data : ", data);
//     if (data) {
//       return { type: "SET_SERVICE_ROOMDATA", payload: response };
//     }
//   });
// }

// export function getRoomService() {
//   console.log("Action getRoomService : ", config.service);
//   if (config.service) {
//     return dispatch => {
//       roomService.getRoomService().then(
//         response => success(response)
//         // error => dispatch(failure(error.toString()))
//       );
//     };

//     function success(response) {
//       console.log("GetRoomService success action ", response);
//       return { type: "SET_SERVICE_ROOMDATA", payload: response };
//     }
//     function failure(error) {
//       console.log("error action ", error);
//       console.log("Type of  : error : ", typeof error);
//       return { type: "SET_SERVICE_ROOMDATA_FAILURE", payload: error };
//     }
//   } else {
//     console.log("Else : Action getRoomService");
//     return { type: "SET_SERVICE_ROOMDATA_TEMP", payload: [] };
//     // return null;
//   }
// }

export function getRoomService() {
  if (config.service) {
    return dispatch => {
      roomService
        .getRoomService()
        .then(response => dispatch(success(response)));
    };

    function success(response) {
      console.log("GetRoomService called----->", response.data);
      return { type: "SET_SERVICE_ROOMDATA", payload: response.data };
    }
  } else {
    console.log("Else : Action getRoomService");
    return { type: "SET_SERVICE_ROOMDATA_TEMP", payload: [] };
  }
}

// export function getRoomService() {
//   console.log("Action getRoomService : ", config.service);
//   if (config.service) {
//     return dispatch => {
//       roomService.getRoomService().then(
//         response => dispatch(success(response))
//         // error => dispatch(failure(error.toString()))
//       );
//     };

//     function success(response) {
//       console.log("success action ", response);
//       return { type: "SET_SERVICE_ROOMDATA", payload: response };
//     }
//     function failure(error) {
//       console.log("error action ", error);
//       console.log("Type of  : error : ", typeof error);
//       return { type: "SET_SERVICE_ROOMDATA_FAILURE", payload: error };
//     }
//   } else {
//     console.log("Else : Action getRoomService");
//     return { type: "SET_SERVICE_ROOMDATA_TEMP", payload: [] };
//     // return null;
//   }
// }

// export function showAddRoomsBookingPage(addRoomFlag, roomFlag) {
//   console.log("Action : ADD_ROOM_FLAG", roomFlag);
//   return {
//     type: "ADD_ROOM_FLAG",
//     payload: {
//       addRoomFlag: addRoomFlag,
//       roomFlag: roomFlag
//     }
//   };
// }
// export function showViewEditBookingPage(addRoomFlag, roomFlag, editFlag) {
//   console.log("Action : EDIT_FLAG", editFlag);
//   return {
//     type: "EDIT_FLAG",
//     payload: {
//       addRoomFlag: addRoomFlag,
//       roomFlag: roomFlag,
//       editFlag: editFlag
//     }
//   };
// }
// export function showSuccessPage(successFlag) {
//   console.log("Action : SUCCESS_FLAG", successFlag);

//   return {
//     type: "SUCCESS_FLAG",
//     payload: {
//       successFlag
//     }
//   };
// }
// export function setAddOrUpdateFlag(
//   addRoomFlag,
//   roomFlag,
//   editFlag,
//   addOrUpdate
// ) {
//   console.log("Action : ADD_OR_UPDATE", addOrUpdate);
//   return {
//     type: "ADD_OR_UPDATE",
//     payload: {
//       addRoomFlag: addRoomFlag,
//       roomFlag: roomFlag,
//       editFlag: editFlag,
//       addOrUpdate: addOrUpdate
//     }
//   };
// }

export function filterRoomData(filterData) {
  console.log("Actions : filterRoomData : Prinitning copyRoomData : ");
  return {
    type: "FILTER_ROOMDATA",
    payload: {
      filterData
    }
  };
}

export function selectedEmployeeDetails(employeeDetails) {
  return {
    type: "SELECTED_EMPLOYEE",
    payload: {
      employeeDetails
    }
  };
}

export function updateExisitingBooking(employeeDetails) {
  console.log("Action : UPDATE_EMPLOYEE", employeeDetails);
  return {
    type: "UPDATE_EMPLOYEE",
    payload: {
      employeeDetails
    }
  };
}
export function deleteEmployeeDetails(employeeDetails) {
  console.log("Action : DELETE_EMPLOYEE", employeeDetails);
  return {
    type: "DELETE_EMPLOYEE",
    payload: {
      employeeDetails
    }
  };
}
export function deleteSelectedRoomData(selectedRoomData, employeeDetails) {
  console.log(
    "Action : DELETE_EMPLOYEE selectedRoomData : ",
    selectedRoomData,
    " employeeeDetails : ",
    employeeDetails
  );
  return {
    type: "DELETE_SELECTED_ROOM_EMPLOYEE",
    payload: {
      selectedRoomData,
      employeeDetails
    }
  };
}

export function resetRoomDataValue() {
  return {
    type: "RESET_ROOMDATA"
  };
}

export function selectedRoomDetails(selectedRoom) {
  console.log("Action : SELECTED_ROOM", selectedRoom);
  return {
    type: "SELECTED_ROOM",
    payload: {
      selectedRoom: selectedRoom
    }
  };
}

export function submitNewBooking(BookedEmployeeDetails) {
  console.log("Action : SUBMIT_ADD_ROOM", BookedEmployeeDetails);
  return {
    type: "SUBMIT_ADD_ROOM",
    payload: {
      BookedEmployeeDetails
    }
  };
}

export function bookedDetails(bookedDetails) {
  console.log("Action : BOOKED_DETAILS", bookedDetails);
  return {
    type: "BOOKED_DETAILS",
    payload: {
      bookedDetails
    }
  };
}

export function selectedDate(checkInDate, checkOutDate) {
  console.log("Action : SELECTED_DATES", checkInDate, " , ", checkOutDate);

  return {
    type: "SELECTED_DATES",
    payload: {
      checkInDate: checkInDate,
      checkOutDate: checkOutDate
    }
  };
}

export function setGapArrayValue(gapArray) {
  console.log("Action : GAP_ARRAY", gapArray, " , ", gapArray);

  return {
    type: "GAP_ARRAY",
    payload: { gapArray: gapArray }
  };
}
