export default function filterRoomDataReducer(state = null, action) {
  switch (action.type) {
    case "FILTER_ROOMDATA":
      let filterData = [];
      console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
      console.log(
        "RoomReducer : FILTER_ROOMDATA case : action.payload.roomDataCopy ==== ",
        action.payload.filterData
      );
      console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
      filterData = [
        ...filterData,
        ...JSON.parse(JSON.stringify(action.payload.filterData))
      ];

      return { filterData };
    default:
      return state;
  }
}
