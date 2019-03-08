const initialState = {
  payload: {
    checkInDate: "",
    checkOutDate: "",
    roomFlag: false,
    addRoomFlag: false,
    successFlag: false,
    editFlag: false,
    addOrUpdate: ""
  }
};

export default function(state = initialState, action) {
  console.log("SHOW_ROOM_REDUCER : action.type : ", action.type);
  console.log("SHOW_ROOM_REDUCER : action.payload : ", action.payload);
  console.log("---------------------------------------------------");
  // console.log("collapse reducer : ", state);
  switch (action.type) {
    case "SET_ROOMS_FLAG":
      return action.payload;
    // case "ADD_ROOM_FLAG":
    //   return action.payload;
    // case "SUCCESS_FLAG":
    //   return action.payload;
    // case "EDIT_FLAG":
    //   return action.payload;
    // case "ADD_OR_UPDATE":
    //   return action.payload;
    default:
      return state;
  }
}
