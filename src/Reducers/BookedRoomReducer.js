const initialState = {
  // BookedRoomData: [
  //   {
  //     EmployeeName: "Employee1",
  //     EmployeeID: "123456",
  //     ProjectID: "P101",
  //     ManagerName: "Manager1",
  //     RoomID: "101",
  //     FloorName: "Floor1",
  //     RoomType: "Shared",
  //     ActiveStatus: "Active",
  //     CheckInDate: "02/03/2019",
  //     CheckOutDate: "05/03/2019"
  //   }
  // ]
};

export default function showRoomsList(state = initialState, action) {
  console.log("ROOM_REDUCER : action.type : ", action.type);
  console.log("ROOM_REDUCER : action.payload : ", action.payload);
  console.log("---------------------------------------------------");
  switch (action.type) {
    case "BOOKED_DETAILS":
      // console.log("After Booking :", action.payload);
      return action.payload;
    // case "SUBMIT_ROOM":
    //   console.log("BppkedRoomReducer ---->");
    //   console.log(state.BookedRoomData.concat(action.payload));
    //   return { BookedRoomData: state.BookedRoomData.concat(action.payload) };
    default:
      return state;
  }
}
