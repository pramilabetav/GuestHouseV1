export default function showRoomsList(state = null, action) {
  console.log("SELECTED_ROOM_REDUCER : action.type : ", action.type);
  console.log("SELECTED_ROOM_REDUCER : action.payload : ", action.payload);
  console.log("---------------------------------------------------");
  switch (action.type) {
    case "SELECTED_ROOM":
      return action.payload;
    case "DELETE_SELECTED_ROOM_EMPLOYEE":
      console.log(
        "DELETE_SELECTED_ROOM_EMPLOYEE : action.payload.selectedRoomData.BookedEmployeeDetails : ",
        action.payload.selectedRoomData.BookedEmployeeDetails
      );
      action.payload.selectedRoomData.selectedRoom.BookedEmployeeDetails.map(
        (emp, i) => {
          action.payload.selectedRoomData.selectedRoom.BookedEmployeeDetails.splice(
            i,
            i + 1
          );
          // return emp;
        }
      );
      console.log(
        "PRINTING updated value : ",
        action.payload.selectedRoomData.BookedEmployeeDetails
      );
      return action.payload.selectedRoomData;
    default:
      return state;
  }
}
