const initialState = {
  RoomData: [
    {
      RoomID: "101",
      FloorName: "Floor1",
      RoomType: "Shared",
      ActiveStatus: "A",
      Capacity: "2",
      BookedEmployeeDetails: [
        {
          EmployeeName: "Pummy101",
          EmployeeID: "1011",
          ProjectID: "P101",
          ManagerName: "Swapnil101",
          CheckInDate: "02-03-2019",
          CheckOutDate: "05-03-2019"
        }
      ]
    },
    {
      RoomID: "102",
      FloorName: "Floor2",
      RoomType: "Single",
      ActiveStatus: "A",
      Capacity: "2",
      BookedEmployeeDetails: [
        {
          EmployeeName: "Pummy102",
          EmployeeID: "1021",
          ProjectID: "P102",
          ManagerName: "Swapnil102",
          CheckInDate: "02-03-2019",
          CheckOutDate: "05-03-2019"
        }
      ]
    },
    {
      RoomID: "103",
      FloorName: "Floor3",
      RoomType: "Shared",
      ActiveStatus: "A",
      Capacity: "2",
      BookedEmployeeDetails: []
    },
    {
      RoomID: "104",
      FloorName: "Floor4",
      RoomType: "Shared",
      ActiveStatus: "A",
      Capacity: "2",
      BookedEmployeeDetails: []
    },
    {
      RoomID: "105",
      FloorName: "Floor5",
      RoomType: "Shared",
      ActiveStatus: "A",
      Capacity: "2",
      BookedEmployeeDetails: []
    },
    {
      RoomID: "106",
      FloorName: "Floor6",
      RoomType: "Shared",
      ActiveStatus: "A",
      Capacity: "2",
      BookedEmployeeDetails: [
        {
          EmployeeName: "Swapnil106",
          EmployeeID: "1061",
          ProjectID: "P101",
          ManagerName: "Pummy106",
          CheckInDate: "02-03-2019",
          CheckOutDate: "05-03-2019"
        },
        {
          EmployeeName: "Employee106",
          EmployeeID: "1062",
          ProjectID: "P101",
          ManagerName: "Manager106",
          CheckInDate: "02-03-2019",
          CheckOutDate: "05-03-2019"
        }
      ]
    }
  ]
};

export default function showRoomsList(state = initialState, action) {
  console.log("ROOM_REDUCER : action.type : ", action.type);
  console.log("ROOM_REDUCER : action.payload : ", action.payload);
  console.log("---------------------------------------------------");

  switch (action.type) {
    case "SUBMIT_ADD_ROOM":
      state.RoomData.map((room, i) => {
        if (room.RoomID === action.payload.BookedEmployeeDetails.RoomID) {
          state.RoomData[i].BookedEmployeeDetails.push(
            action.payload.BookedEmployeeDetails
          );
        }
        console.log("PUMMY ---> SUBMIT_ADD_ROOM_REDUCER check roomlist  :");
        console.log(state.RoomData);
        console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
        return { RoomData: state.RoomData };
      });
      // console.log("Existing/Updated RoomList : ", state.RoomData);
      // return;
      return { RoomData: state.RoomData };
    case "DELETE_EMPLOYEE":
      console.log(
        "DELETE_EMPLOYEE Reducer EMPLOYEEID -->",
        action.payload.employeeDetails.EmployeeID
      );
      let localvar;
      state.RoomData.map((room, i) => {
        // room.BookedEmployeeDetails.map((employee, i) => {
        //   console.log(
        //     "INSIDE MAP employee.EmployeeID-->",
        //     employee.EmployeeID,
        //     " action.payload.employeeDetails.EmployeeID",
        //     action.payload.employeeDetails.EmployeeID
        //   );
        //   if (
        //     employee.EmployeeID ===
        //     action.payload.employeeDetails.employeeDetails
        //   ) {
        //   }
        // });

        localvar = room.BookedEmployeeDetails.splice(
          employee =>
            employee.EmployeeID !== action.payload.employeeDetails.EmployeeID
        );
        console.log("AFTER FILTER room MAP --> ", localvar);
        return { room };
      });

      let newRoom = state.RoomData.filter(
        room =>
          room.BookedEmployeeDetails.filter(
            employee =>
              employee.EmployeeID !== action.payload.employeeDetails.EmployeeID
          ).length === 0
      );

      console.log("ROOMDATA AFTER MAP CALL newRoom---------> ", newRoom);
      return { RoomData: state.RoomData };
    case "UPDATE_EMPLOYEE":
      console.log("PUMMY ---> UPDATE_EMPLOYEE check action.payload  :");
      console.log(action.payload);
      console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");

      state.RoomData.map((room, i) => {
        room.BookedEmployeeDetails.map((employee, i) => {
          if (
            employee.EmployeeID === action.payload.employeeDetails.EmployeeID
          ) {
            console.log(
              "PRINTING FROM double map value of employee  toDateString: " +
                action.payload.employeeDetails.CheckInDate.toDateString +
                "BEFORE EmployeeName : " +
                employee.CheckInDate.toDateString
            );
            employee.EmployeeID = action.payload.employeeDetails.EmployeeID;
            employee.EmployeeName = action.payload.employeeDetails.EmployeeName;
            employee.CheckInDate = action.payload.employeeDetails.CheckInDate;
            employee.CheckOutDate = action.payload.employeeDetails.CheckOutDate;
            employee.ManagerName = action.payload.employeeDetails.ManagerName;
            employee.ProjectID = action.payload.employeeDetails.ProjectID;

            console.log(
              "After Update EmployeeName what is the value: " +
                employee.EmployeeName
            );
          }
          //return ;
        });
        return { RoomData: state.RoomData };
      });
      return { RoomData: state.RoomData };

    default:
      return state;
  }
}
