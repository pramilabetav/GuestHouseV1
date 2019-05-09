export default function showLoading(state = false, action) {
        // console.log("SELECTED_EMPLOYEE_REDUCER : action.type : ", action.type);
        // console.log("SELECTED_EMPLOYEE_REDUCER : action.payload : ", action.payload);
        // console.log("---------------------------------------------------");
        switch (action.type) {
          case "SET_LOADER_FLAG":
            return action.payload;
          default:
            return state;
        }
      }
      