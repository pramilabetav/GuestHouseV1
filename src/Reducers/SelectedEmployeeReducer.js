export default function showSelectedEmployee(state = null, action) {
  // console.log("SELECTED_EMPLOYEE_REDUCER : action.type : ", action.type);
  // console.log("SELECTED_EMPLOYEE_REDUCER : action.payload : ", action.payload);
  // console.log("---------------------------------------------------");
  switch (action.type) {
    case "SELECTED_EMPLOYEE":
      return action.payload;
    default:
      return state;
  }
}
