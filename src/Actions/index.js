export function showRoomsContainer(checkInDate, checkOutDate, flag) {
  console.log("Action : SHOW_ROOMS", flag);
  return {
    type: "SHOW_ROOMS",
    payload: {
      checkInDate: checkInDate,
      checkOutDate: checkOutDate,
      roomFlag: flag
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

export function setAddOrUpdateFlag(
  addRoomFlag,
  roomFlag,
  editFlag,
  addOrUpdate
) {
  console.log("Action : ADD_OR_UPDATE", addOrUpdate);
  return {
    type: "ADD_OR_UPDATE",
    payload: {
      addRoomFlag: addRoomFlag,
      roomFlag: roomFlag,
      editFlag: editFlag,
      addOrUpdate: addOrUpdate
    }
  };
}

export function showAddRoomsBookingPage(addRoomFlag, roomFlag) {
  console.log("Action : ADD_ROOM_FLAG", roomFlag);
  return {
    type: "ADD_ROOM_FLAG",
    payload: {
      addRoomFlag: addRoomFlag,
      roomFlag: roomFlag
    }
  };
}

export function showViewEditBookingPage(addRoomFlag, roomFlag, editFlag) {
  console.log("Action : EDIT_FLAG", editFlag);
  return {
    type: "EDIT_FLAG",
    payload: {
      addRoomFlag: addRoomFlag,
      roomFlag: roomFlag,
      editFlag: editFlag
    }
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

export function showSuccessPage(successFlag) {
  console.log("Action : SUCCESS_FLAG", successFlag);

  return {
    type: "SUCCESS_FLAG",
    payload: {
      successFlag
    }
  };
}
