const initialState = {
  payload: {
    checkInDate: "",
    checkOutDate: "",
    roomFlag: false,
    addRoomFlag: false
  }
};

export default function(state = initialState, action) {
  console.log("ShowRoomREducer printing action :-");
  console.log(action);
  // console.log("collapse reducer : ", state);
  switch (action.type) {
    case "SHOW_ROOMS":
      return action.payload;
    case "ADD_ROOM":
      return action.payload;
    default:
      return state;
  }
}
