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
          EmployeeName: "Pummy201",
          EmployeeID: "2011",
          ProjectID: "P201",
          ManagerName: "Swapnil201",
          CheckInDate: "02-03-2019",
          CheckOutDate: "05-03-2019"
        },
        {
          EmployeeName: "Pummy202",
          EmployeeID: "2012",
          ProjectID: "P202",
          ManagerName: "Swapnil202",
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
          CheckInDate: "03-03-2019",
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
    },
    {
      RoomID: "107",
      FloorName: "Floor1",
      RoomType: "Shared",
      ActiveStatus: "A",
      Capacity: "2",
      BookedEmployeeDetails: []
    }
    // {
    //   RoomID: "201",
    //   FloorName: "Floor2",
    //   RoomType: "Shared",
    //   ActiveStatus: "A",
    //   Capacity: "2",
    //   BookedEmployeeDetails: []
    // },
    // {
    //   RoomID: "202",
    //   FloorName: "Floor2",
    //   RoomType: "Shared",
    //   ActiveStatus: "A",
    //   Capacity: "2",
    //   BookedEmployeeDetails: []
    // },
    // {
    //   RoomID: "203",
    //   FloorName: "Floor2",
    //   RoomType: "Shared",
    //   ActiveStatus: "A",
    //   Capacity: "2",
    //   BookedEmployeeDetails: []
    // },
    // {
    //   RoomID: "204",
    //   FloorName: "Floor2",
    //   RoomType: "Shared",
    //   ActiveStatus: "A",
    //   Capacity: "2",
    //   BookedEmployeeDetails: []
    // },
    // {
    //   RoomID: "205",
    //   FloorName: "Floor2",
    //   RoomType: "Shared",
    //   ActiveStatus: "A",
    //   Capacity: "2",
    //   BookedEmployeeDetails: []
    // },
    // {
    //   RoomID: "206",
    //   FloorName: "Floor2",
    //   RoomType: "Shared",
    //   ActiveStatus: "A",
    //   Capacity: "2",
    //   BookedEmployeeDetails: []
    // },
    // {
    //   RoomID: "207",
    //   FloorName: "Floor2",
    //   RoomType: "Shared",
    //   ActiveStatus: "A",
    //   Capacity: "2",
    //   BookedEmployeeDetails: []
    // },
    // {
    //   RoomID: "301",
    //   FloorName: "Floor3",
    //   RoomType: "Shared",
    //   ActiveStatus: "A",
    //   Capacity: "2",
    //   BookedEmployeeDetails: []
    // },
    // {
    //   RoomID: "302",
    //   FloorName: "Floor3",
    //   RoomType: "Shared",
    //   ActiveStatus: "A",
    //   Capacity: "2",
    //   BookedEmployeeDetails: []
    // },
    // {
    //   RoomID: "303",
    //   FloorName: "Floor3",
    //   RoomType: "Shared",
    //   ActiveStatus: "A",
    //   Capacity: "2",
    //   BookedEmployeeDetails: []
    // },
    // {
    //   RoomID: "304",
    //   FloorName: "Floor3",
    //   RoomType: "Shared",
    //   ActiveStatus: "A",
    //   Capacity: "2",
    //   BookedEmployeeDetails: []
    // },
    // {
    //   RoomID: "305",
    //   FloorName: "Floor3",
    //   RoomType: "Shared",
    //   ActiveStatus: "A",
    //   Capacity: "2",
    //   BookedEmployeeDetails: []
    // },
    // {
    //   RoomID: "306",
    //   FloorName: "Floor3",
    //   RoomType: "Shared",
    //   ActiveStatus: "A",
    //   Capacity: "2",
    //   BookedEmployeeDetails: []
    // },
    // {
    //   RoomID: "307",
    //   FloorName: "Floor3",
    //   RoomType: "Shared",
    //   ActiveStatus: "A",
    //   Capacity: "2",
    //   BookedEmployeeDetails: []
    // },
    // {
    //   RoomID: "401",
    //   FloorName: "Floor4",
    //   RoomType: "Shared",
    //   ActiveStatus: "A",
    //   Capacity: "2",
    //   BookedEmployeeDetails: []
    // },
    // {
    //   RoomID: "402",
    //   FloorName: "Floor4",
    //   RoomType: "Shared",
    //   ActiveStatus: "A",
    //   Capacity: "2",
    //   BookedEmployeeDetails: []
    // },
    // {
    //   RoomID: "403",
    //   FloorName: "Floor4",
    //   RoomType: "Shared",
    //   ActiveStatus: "A",
    //   Capacity: "2",
    //   BookedEmployeeDetails: []
    // },
    // {
    //   RoomID: "404",
    //   FloorName: "Floor4",
    //   RoomType: "Shared",
    //   ActiveStatus: "A",
    //   Capacity: "2",
    //   BookedEmployeeDetails: []
    // },
    // {
    //   RoomID: "405",
    //   FloorName: "Floor4",
    //   RoomType: "Shared",
    //   ActiveStatus: "A",
    //   Capacity: "2",
    //   BookedEmployeeDetails: []
    // },
    // {
    //   RoomID: "406",
    //   FloorName: "Floor4",
    //   RoomType: "Shared",
    //   ActiveStatus: "A",
    //   Capacity: "2",
    //   BookedEmployeeDetails: []
    // },
    // {
    //   RoomID: "407",
    //   FloorName: "Floor4",
    //   RoomType: "Shared",
    //   ActiveStatus: "A",
    //   Capacity: "2",
    //   BookedEmployeeDetails: []
    // },
    // {
    //   RoomID: "501",
    //   FloorName: "Floor2",
    //   RoomType: "Shared",
    //   ActiveStatus: "A",
    //   Capacity: "2",
    //   BookedEmployeeDetails: []
    // },
    // {
    //   RoomID: "502",
    //   FloorName: "Floor2",
    //   RoomType: "Shared",
    //   ActiveStatus: "A",
    //   Capacity: "2",
    //   BookedEmployeeDetails: []
    // },
    // {
    //   RoomID: "503",
    //   FloorName: "Floor2",
    //   RoomType: "Shared",
    //   ActiveStatus: "A",
    //   Capacity: "2",
    //   BookedEmployeeDetails: []
    // },
    // {
    //   RoomID: "504",
    //   FloorName: "Floor2",
    //   RoomType: "Shared",
    //   ActiveStatus: "A",
    //   Capacity: "2",
    //   BookedEmployeeDetails: []
    // },
    // {
    //   RoomID: "505",
    //   FloorName: "Floor2",
    //   RoomType: "Shared",
    //   ActiveStatus: "A",
    //   Capacity: "2",
    //   BookedEmployeeDetails: []
    // },
    // {
    //   RoomID: "506",
    //   FloorName: "Floor2",
    //   RoomType: "Shared",
    //   ActiveStatus: "A",
    //   Capacity: "2",
    //   BookedEmployeeDetails: []
    // },
    // {
    //   RoomID: "507",
    //   FloorName: "Floor2",
    //   RoomType: "Shared",
    //   ActiveStatus: "A",
    //   Capacity: "2",
    //   BookedEmployeeDetails: []
    // }
  ]
};
// const staticState = Object.assign({}, initialState);
export default function showRoomsList(
  state = initialState,
  action
  // filterData = staticState
) {
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
        console.log("room -> ", room);
        room.BookedEmployeeDetails.map((employee, i) => {
          console.log(
            "INSIDE MAP employee.EmployeeID-->",
            employee.EmployeeID,
            " action.payload.employeeDetails.EmployeeID",
            action.payload.employeeDetails.EmployeeID
          );
          if (employee.EmployeeID) {
            if (
              employee.EmployeeID === action.payload.employeeDetails.EmployeeID
            ) {
              console.log("TRUE --->", i);
              // room.BookedEmployeeDetails[i].pop(employee.EmployeeID);
              // delete room.BookedEmployeeDetails[i];
              room.BookedEmployeeDetails.splice(i, i + 1);
            }
          }
        });
        console.log("AFTER FILTER room MAP --> ", state.RoomData);
        //   localvar = room.BookedEmployeeDetails.splice(
        //     employee =>
        //       employee.EmployeeID !== action.payload.employeeDetails.EmployeeID
        //   );
        //   console.log("AFTER FILTER room MAP --> ", localvar);
        //   return { room };
        // });

        // let newRoom = state.RoomData.filter(
        //   room =>
        //     room.BookedEmployeeDetails.filter(
        //       employee =>
        //         employee.EmployeeID !== action.payload.employeeDetails.EmployeeID
        //     ).length === 0
      });

      // console.log("ROOMDATA AFTER MAP CALL newRoom---------> ", newRoom);
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
    case "RESET_ROOMDATA":
      // const staticState = initialState.slice().sort();
      // console.log("PUMMY ---> RESET_ROOMDATA check action.payload  :");
      // console.log("staticState --> ", staticState);
      // console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
      // //state.RoomData = [...filterData.RoomData];
      // console.log(
      //   "Checking Equality --> ",
      //   staticState.RoomData === state.RoomData
      // );
      console.log("Sholdnt get called --> ", state.RoomData);
      console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
      return { RoomData: state.RoomData };
    case "FILTER_ROOMDATA":
      // const staticState = [...state.RoomData];
      const fruitsArray = [
        {
          id: "101",
          name: "orange",
          colors: [{ col: "RED" }, { col: "GREEN" }]
        },
        {
          id: "102",
          name: "Apple",
          colors: [{ col: "RED" }, { col: "GREEN" }]
        }
      ];
      const copyArray = [...fruitsArray];
      console.log("BEFORE filter EQUALITY : ", copyArray === fruitsArray);
      console.log("FRUITSARRAY = ", fruitsArray);
      console.log("COPYARRAY = ", copyArray);
      const returnArray = copyArray.map((copyA, i) => {
        copyA.colors = copyA.colors.filter(colorF => colorF.col === "RED");
        return copyA;
      });
      console.log("CHECKING EQUALITY : ", copyArray === fruitsArray);
      console.log("FRUITSARRAY = ", fruitsArray);
      console.log("COPYARRAY = ", copyArray);
      console.log("returnArray = ", returnArray);
      console.log("************************************************");
      let staticState = { ...state };
      console.log("PUMMY ---> FILTER_ROOMDATA check action.payload  :");
      console.log(action.payload);
      console.log("statiState -----> ", staticState);
      console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
      staticState.RoomData = state.RoomData.map((room, i) => {
        room.BookedEmployeeDetails.map((employee, i) => {
          if (employee.CheckInDate) {
            room.BookedEmployeeDetails = room.BookedEmployeeDetails.filter(
              employee => employee.CheckInDate === action.payload.checkInDate
            );
          }
        });
        return { ...room };
      });
      const NewState = Object.assign({}, staticState);
      staticState = {};
      console.log("AFTER MAP staticState ============> ", staticState);
      return { ...state, RoomData: NewState.RoomData };
    default:
      return state;
  }
}
