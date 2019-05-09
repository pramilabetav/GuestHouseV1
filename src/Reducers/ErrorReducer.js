export default function setErrorData(state = null, action) {
  switch (action.type) {
    case "SET_SERVICE_ROOMDATA_FAILURE":
      console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
      console.log(
        "ErrorReducer : SET_SERVICE_ROOMDATA_FAILURE case : action.payload ==== ",
        action.payload
      );
      console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

      return action.payload;
    default:
      return state;
  }
}
