const initialState = {
  BookedRoomData: [
    {
      EmployeeName: "Employee1",
      EmployeeID: "123456",
      ProjectID: "P101",
      ManagerName: "Manager1",
      RoomID: "101",
      FloorName: "Floor1",
      RoomType: "Shared",
      ActiveStatus: "Active",
      CheckInDate: "02/03/2019",
      CheckOutDate: "05/03/2019"
    },
    {}
  ]
};

export default function showRoomsList(state = initialState, action) {
  return state;
}
