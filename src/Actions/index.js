export function showRoomsContainer(checkInDate, checkOutDate, flag) {
  console.log(
    "Action SearchAvailability, checkIn :" +
      checkInDate +
      " , checkout  : " +
      checkOutDate +
      " Flag : " +
      flag
  );
  return {
    type: "SHOW_ROOMS",
    payload: {
      checkInDate: checkInDate,
      checkOutDate: checkOutDate,
      roomFlag: flag
    }
  };
}

export function showAddRoomsBookingPage(addRoomFlag, roomFlag) {
  return {
    type: "ADD_ROOM",
    payload: {
      addRoomFlag: addRoomFlag,
      roomFlag: roomFlag
    }
  };
}

export function submitNewBooking(roomDataEntry) {
  return {
    type: "SUBMIT_ROOM",
    payload: {
      roomDataEntry: roomDataEntry
    }
  };
}
