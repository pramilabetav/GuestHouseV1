export default function selectedDates(state = null, action) {
  console.log("SELECTED_DATES Reducer : action.type : ", action.type);
  console.log("SELECTED_DATES Reducer: action.payload : ", action.payload);
  console.log("---------------------------------------------------");
  switch (action.type) {
    case "SELECTED_DATES":
      return action.payload;
    default:
      return state;
  }
}
