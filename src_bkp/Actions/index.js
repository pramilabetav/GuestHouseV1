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

export function setGapArrayData(gapArrayData){
  console.log("Action : GAP_ARRAY : ", gapArrayData);

  return {
    type: "GAP_ARRAY",
    payload: {
      gapArrayData: gapArrayData
    }
  };
}