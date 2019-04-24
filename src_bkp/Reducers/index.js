import { combineReducers } from "redux";
import RoomReducer from "./RoomReducer";
import BookedRoomReducer from "./BookedRoomReducer";
import ShowRoomFlagReducer from "./ShowRoomFlagReducer";
import SelectedRoomReducer from "./SelectedRoomReducer";
import SelectedEmployeeReducer from "./SelectedEmployeeReducer";
import DateReducer from "./DateReducer";
import FilterRoomDataReducer from "./FilterRoomDataReducer";
import GapArrayDataReducer from "./GapArrayDataReducer";

const rootReducer = combineReducers({
  roomsList: RoomReducer,
  bookedRoomsList: BookedRoomReducer,
  showRoomFlag: ShowRoomFlagReducer,
  selectedRoomDetails: SelectedRoomReducer,
  selectedEmployeeDetails: SelectedEmployeeReducer,
  dateReducer: DateReducer,
  filterRoomData: FilterRoomDataReducer,
  gapArrayData:GapArrayDataReducer
});

export default rootReducer;
