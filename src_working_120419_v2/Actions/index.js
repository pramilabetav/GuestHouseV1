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

export function getAll() {
  console.log("Action getAll");
  if (config.service) {
    return dispatch => {
      // dispatch(request());
      roomService
        .getAll()
        .then(
        users => dispatch(success(users)),
        error => dispatch(failure(error.toString()))
        );
    };

    // function request() {
    //   return { type: "GETALL_REQUEST" };
    // }
    function success(users) {
      console.log("success action ", users);
      return { type: "GETALL_SUCCESS", users };
    }
    function failure(error) {
      console.log("error action ", error);
      return { type: "GETALL_FAILURE", error };
    }
  } else {
    console.log("Else : Action getRoomService");

    return { type: "GETALL_SUCCESS", payload: users };
  }
}

export function getRoomService(checkInDate, checkOutDate) {
  console.log("Action getRoomService : ", config.service);
  if (config.service) {
    return dispatch => {
      roomService
        .getRoomService(checkInDate, checkOutDate)
        .then(response => dispatch(success(response)))
        .catch(error => {
          console.log("Action se : Service is throughing error : service is down --> ", error);
          console.log("Action se : Service is throughing error : STATUS --> ", error.status);
          dispatch(failure(error))
        });
    };
    function success(response) {
      console.log("Action called : If block : success -->  ", response.data);
      // return { type: "SET_SERVICE_ROOMDATA", payload: JSON.parse(response.data) };
      return { type: "SET_SERVICE_ROOMDATA", payload: response.data };
    }

  } else {
    console.log("Else: Config : Action getRoomService");
    return { type: "SET_SERVICE_ROOMDATA_TEMP"};
    // return null;
  }
}

function failure(error) {
  console.log("Action called :failure fnction called : error -->  ", error);
  return { type: "SET_SERVICE_ROOMDATA_FAILURE", payload: error };
}

export function addEditEmployeeBookingService(roomId, employee) {
  return dispatch => {
    roomService
      .addEditEmployeeBooking(roomId, employee)
      .then(response => { dispatch(successAddEmployee(reponse)) })
      .catch(error => {
        dispatch(failure(error))
      })
  }
  function successAddEmployee(response) {
    console.log("addEditEmployeeBookingService called : If block : success -->  ", response);
    // return { type: "SET_SERVICE_ROOMDATA", payload: JSON.parse(response.data) };
    return { type: "SET_ADD_EDIT_EMPLOYEE_SUCCESS", payload: response };
  }

}

export function deleteEmployeeBookingService(roomId, employee) {
  return dispatch => {
    roomService
      .deleteEmployeeBooking(roomId, employee)
      .then(response => { dispatch(successDeleteEmployee(reponse)) })
      .catch(error => {
        dispatch(failure(error))
      })
  }
  function successDeleteEmployee(response) {
    console.log("addEditEmployeeBookingService called : If block : success -->  ", response);
    // return { type: "SET_SERVICE_ROOMDATA", payload: JSON.parse(response.data) };
    return { type: "SET_DELETE_EMPLOYEE_SUCCESS", payload: response };
  }

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
