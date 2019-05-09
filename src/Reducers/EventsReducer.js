import moment from "moment";
export default function selectedDates(state = null, action) {
    // console.log("SELECTED_DATES Reducer : action.type : ", action.type);
    // console.log("SELECTED_DATES Reducer: action.payload : ", action.payload);
    // console.log("---------------------------------------------------");
    switch (action.type) {
        case "SET_EVENTS_ARRAY":
            let eventsArray = [];
            console.log("Events Reducer : ", action.payload);
            action.payload.BookedEmployeeDetails.map((employee, i) => {
                eventsArray.push({
                    title: employee.EmployeeName,
                    start:  moment(employee.CheckInDate, "DD-MM-YYYY"),
                    end:  moment(employee.CheckOutDate, "DD-MM-YYYY")
                })
            })
            state = eventsArray;
            eventsArray = [];
            return state;
        default:
            return state;
    }
}
