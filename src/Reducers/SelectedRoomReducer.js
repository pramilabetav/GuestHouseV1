export default function showRoomsList(state = null, action) {
  console.log("SELECTED_ROOM_REDUCER : action.type : ", action.type);
  console.log("SELECTED_ROOM_REDUCER : action.payload : ", action.payload);
  console.log("---------------------------------------------------");
  switch (action.type) {
    case "SELECTED_ROOM":
      return action.payload;
    default:
      return state;
  }
}
