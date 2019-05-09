export default function showGapArrayValue(state = null, action) {
  console.log("Reducer : GAP_ARRAY : action.type : ", action.type);
  console.log("Reducer : GAP_ARRAY : action.payload : ", action.payload);
  console.log("---------------------------------------------------");
  switch (action.type) {
    case "GAP_ARRAY":
      return action.payload;
    default:
      return state;
  }
}

// Gap = [
//   {
//     RoomID: 101,
//     Gap : {
//    '03-04-2019' : 1,
//    '0-04-2019' : 1
//     },
//   },
//   {
//     RoomID: 102,
//     Gap : {
//    '03-04-2019' : 1,
//    '0-04-2019' : 1
//     },
//   }

// ]
