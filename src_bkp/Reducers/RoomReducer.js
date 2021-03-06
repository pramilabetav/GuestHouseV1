import moment from "moment";
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
          EmployeeName: "EmployeeName101",
          EmployeeID: "1011",
          ProjectID: "P101",
          ManagerName: "ManagerName101",
          CheckInDate: "03-03-2019",
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
          EmployeeName: "EmployeeName1021",
          EmployeeID: "1021",
          ProjectID: "P102",
          ManagerName: "ManagerName102",
          CheckInDate: "03-03-2019",
          CheckOutDate: "05-03-2019"
        },
        {
          EmployeeName: "EmployeeName1022",
          EmployeeID: "1022",
          ProjectID: "P1022",
          ManagerName: "ManagerName1022",
          CheckInDate: "03-03-2019",
          CheckOutDate: "04-03-2019"
        },
        {
          EmployeeName: "EmployeeName1023",
          EmployeeID: "1023",
          ProjectID: "P103",
          ManagerName: "ManagerName103",
          CheckInDate: "05-03-2019",
          CheckOutDate: "06-03-2019"
        },
        {
          EmployeeName: "EmployeeName1024",
          EmployeeID: "1024",
          ProjectID: "P1024",
          ManagerName: "ManagerName1024",
          CheckInDate: "05-03-2019",
          CheckOutDate: "06-03-2019"
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
          EmployeeName: "ManagerName106",
          EmployeeID: "1061",
          ProjectID: "P101",
          ManagerName: "EmployeeName106",
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
    },
    {
      RoomID: "201",
      FloorName: "Floor2",
      RoomType: "Shared",
      ActiveStatus: "A",
      Capacity: "2",
      BookedEmployeeDetails: [
        {
          EmployeeName: "EmployeeName2011",
          EmployeeID: "2011",
          ProjectID: "P201",
          ManagerName: "ManagerName201",
          CheckInDate: "03-03-2019",
          CheckOutDate: "05-03-2019"
        },
        {
          EmployeeName: "EmployeeName2012",
          EmployeeID: "2012",
          ProjectID: "P202",
          ManagerName: "ManagerName202",
          CheckInDate: "03-03-2019",
          CheckOutDate: "05-03-2019"
        }
      ]
    },
    {
      RoomID: "202",
      FloorName: "Floor2",
      RoomType: "Shared",
      ActiveStatus: "A",
      Capacity: "2",
      BookedEmployeeDetails: []
    },
    {
      RoomID: "203",
      FloorName: "Floor2",
      RoomType: "Shared",
      ActiveStatus: "A",
      Capacity: "2",
      BookedEmployeeDetails: []
    },
    {
      RoomID: "204",
      FloorName: "Floor2",
      RoomType: "Shared",
      ActiveStatus: "A",
      Capacity: "2",
      BookedEmployeeDetails: []
    },
    {
      RoomID: "205",
      FloorName: "Floor2",
      RoomType: "Shared",
      ActiveStatus: "A",
      Capacity: "2",
      BookedEmployeeDetails: []
    },
    {
      RoomID: "206",
      FloorName: "Floor2",
      RoomType: "Shared",
      ActiveStatus: "A",
      Capacity: "2",
      BookedEmployeeDetails: []
    },
    {
      RoomID: "207",
      FloorName: "Floor2",
      RoomType: "Shared",
      ActiveStatus: "A",
      Capacity: "2",
      BookedEmployeeDetails: []
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
        return { RoomData: state.RoomData };
      });
      return { RoomData: state.RoomData };
    case "DELETE_EMPLOYEE":
      let localvar;
      state.RoomData.map((room, i) => {
        room.BookedEmployeeDetails.map((employee, i) => {
          if (employee.EmployeeID) {
            if (
              employee.EmployeeID === action.payload.employeeDetails.EmployeeID
            ) {
              room.BookedEmployeeDetails.splice(i, i + 1);
            }
          }
        });
      });
      return { RoomData: state.RoomData };
    case "UPDATE_EMPLOYEE":
      console.log("UPDATE_EMPLOYEE case --> action.payload", action.payload);
      state.RoomData.map((room, i) => {
        room.BookedEmployeeDetails.map((employee, i) => {
          if (
            employee.EmployeeID === action.payload.employeeDetails.EmployeeID
          ) {
            employee.EmployeeID = action.payload.employeeDetails.EmployeeID;
            employee.EmployeeName = action.payload.employeeDetails.EmployeeName;
            employee.CheckInDate = action.payload.employeeDetails.CheckInDate;
            employee.CheckOutDate = action.payload.employeeDetails.CheckOutDate;
            employee.ManagerName = action.payload.employeeDetails.ManagerName;
            employee.ProjectID = action.payload.employeeDetails.ProjectID;
            return employee;
          }
        });
        return room;
      });
      console.log("AFTER UPDATE Roomdata : ", state.RoomData);
      return { RoomData: state.RoomData };
    // case "FILTER_ROOMDATA":
    //   let filterData = [];
    //   console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    //   console.log(
    //     "RoomReducer : FILTER_ROOMDATA case : action.payload.roomDataCopy ==== ",
    //     action.payload.roomDataCopy
    //   );
    //   console.log(
    //     "RoomReducer : FILTER_ROOMDATA case : state.Roomdata ==== ",
    //     state.RoomData
    //   );
    //   console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    //   filterData = [
    //     ...filterData,
    //     ...JSON.parse(JSON.stringify(action.payload.roomDataCopy))
    //   ];

    //   return { RoomData: filterData };
    default:
      console.log(
        "RoomReducer : Default Case Called THE END RoomData, ",
        state.RoomData
      );
      return { RoomData: state.RoomData };
  }
}
