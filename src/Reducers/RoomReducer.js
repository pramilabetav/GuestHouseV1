
import moment from "moment";
import { config } from "../Configs/Config";

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
          EmployeeName: "EmployeeName1011",
          EmployeeID: "1011",
          ProjectID: "P101",
          ManagerName: "ManagerName101",
          CheckInDate: "03-04-2019",
          CheckOutDate: "05-04-2019"
        },
        {
          EmployeeName: "EmployeeName1012",
          EmployeeID: "1012",
          ProjectID: "P101",
          ManagerName: "ManagerName101",
          CheckInDate: "05-04-2019",
          CheckOutDate: "06-04-2019"
        },
        {
          EmployeeName: "EmployeeName1013",
          EmployeeID: "1013",
          ProjectID: "P101",
          ManagerName: "ManagerName101",
          CheckInDate: "06-04-2019",
          CheckOutDate: "07-04-2019"
        },
        {
          EmployeeName: "EmployeeName1014",
          EmployeeID: "1014",
          ProjectID: "P101",
          ManagerName: "ManagerName101",
          CheckInDate: "03-04-2019",
          CheckOutDate: "04-04-2019"
        },
        {
          EmployeeName: "EmployeeName1015",
          EmployeeID: "1015",
          ProjectID: "P101",
          ManagerName: "ManagerName101",
          CheckInDate: "05-04-2019",
          CheckOutDate: "06-04-2019"
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
          CheckInDate: "01-04-2019",
          CheckOutDate: "03-04-2019"
        },
        {
          EmployeeName: "EmployeeName1022",
          EmployeeID: "1022",
          ProjectID: "P1022",
          ManagerName: "ManagerName1022",
          CheckInDate: "05-04-2019",
          CheckOutDate: "07-04-2019"
        },
        {
          EmployeeName: "EmployeeName1023",
          EmployeeID: "1023",
          ProjectID: "P103",
          ManagerName: "ManagerName103",
          CheckInDate: "14-04-2019",
          CheckOutDate: "15-04-2019"
        },
        {
          EmployeeName: "EmployeeName1024",
          EmployeeID: "1024",
          ProjectID: "P1024",
          ManagerName: "ManagerName1024",
          CheckInDate: "04-04-2019",
          CheckOutDate: "05-04-2019"
        },
        {
          EmployeeName: "EmployeeName1025",
          EmployeeID: "1025",
          ProjectID: "P1024",
          ManagerName: "ManagerName1024",
          CheckInDate: "10-04-2019",
          CheckOutDate: "12-04-2019"
        },
        {
          EmployeeName: "EmployeeName1026",
          EmployeeID: "1026",
          ProjectID: "P1024",
          ManagerName: "ManagerName1024",
          CheckInDate: "05-04-2019",
          CheckOutDate: "07-04-2019"
        }
      ]
    },
    {
      RoomID: "103",
      FloorName: "Floor3",
      RoomType: "Shared",
      ActiveStatus: "A",
      Capacity: "2",
      BookedEmployeeDetails: [
        {
          EmployeeName: "EmployeeName1022",
          EmployeeID: "1031",
          ProjectID: "P1022",
          ManagerName: "ManagerName1022",
          CheckInDate: "01-04-2019",
          CheckOutDate: "03-04-2019"
        },
        {
          EmployeeName: "EmployeeName1023",
          EmployeeID: "1032",
          ProjectID: "P103",
          ManagerName: "ManagerName103",
          CheckInDate: "04-04-2019",
          CheckOutDate: "06-04-2019"
        },
        {
          EmployeeName: "EmployeeName1024",
          EmployeeID: "1034",
          ProjectID: "P1024",
          ManagerName: "ManagerName1024",
          CheckInDate: "09-04-2019",
          CheckOutDate: "10-04-2019"
        }
      ]
    },
    {
      RoomID: "104",
      FloorName: "Floor4",
      RoomType: "Shared",
      ActiveStatus: "A",
      Capacity: "2",
      BookedEmployeeDetails: [
        {
          EmployeeName: "EmployeeName1041",
          EmployeeID: "1041",
          ProjectID: "P1022",
          ManagerName: "ManagerName1022",
          CheckInDate: "01-04-2019",
          CheckOutDate: "03-04-2019"
        },
        {
          EmployeeName: "EmployeeName1042",
          EmployeeID: "1042",
          ProjectID: "P1022",
          ManagerName: "ManagerName1022",
          CheckInDate: "01-04-2019",
          CheckOutDate: "03-04-2019"
        }
      ]
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
          CheckInDate: "03-04-2019",
          CheckOutDate: "05-04-2019"
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
      BookedEmployeeDetails: [
        {
          EmployeeName: "EmployeeName2071",
          EmployeeID: "1041",
          ProjectID: "P1022",
          ManagerName: "ManagerName1022",
          CheckInDate: "12-04-2019",
          CheckOutDate: "14-04-2019"
        },
        {
          EmployeeName: "EmployeeName2072",
          EmployeeID: "1042",
          ProjectID: "P1022",
          ManagerName: "ManagerName1022",
          CheckInDate: "12-04-2019",
          CheckOutDate: "13-04-2019"
        }
      ]
    }
  ]
  // RoomData: []

};

export default function showRoomsList(state = initialState, action) {
  console.log("ROOM_REDUCER : action.type : ", action.type);
  console.log("ROOM_REDUCER : action.payload : ", action.payload);
  console.log("---------------------------------------------------");

  switch (action.type) {
    case "SET_SERVICE_ROOMDATA":
      console.log("Response from service : ", action.payload);
      return { RoomData: action.payload };
    // case "SET_SERVICE_ROOMDATA_FAILURE":
    //   console.log("Error Response from service : ", action.payload);
    //   return { RoomData: action.payload };
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
              room.BookedEmployeeDetails.splice(i, 1);
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
      console.log("RoomReducer : Default Case Called THE END RoomData, ");
      if (config.service) {
        console.log("Final Room Reducer data : ");
        return { state };
      } else {
        // console.log(
        //   "RoomReducer : Default Case Called THE END RoomData, ",
        //   state.RoomData
        // );
        console.log("Final Room Reducer data : ");
        return { RoomData: state.RoomData };
        // return { RoomData: null };
      }
  }
}
