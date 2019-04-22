import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// import { selectedRoomDetails } from "../Actions";
import {
  setRoomsFlagAction,
  resetRoomDataValue,
  selectedRoomDetails,
  getRoomService
} from "../Actions";
import ErrorContainer from "./ErrorContainer";

class Rooms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // roomDataCopy: [],
      initialFilterState: []
    };
    this.goToHomePage = this.goToHomePage.bind(this);
    this.callAddNewBooking = this.callAddNewBooking.bind(this);
    this.callViewEditPage = this.callViewEditPage.bind(this);
  }
  callAddNewBooking(room) {
    this.props.dispatch(setRoomsFlagAction(false, true));
    this.props.dispatch(selectedRoomDetails(room));
  }
  callViewEditPage(room) {
    console.log("Room : CallViewEditPage Function : room : ", room);
    this.props.dispatch(
      setRoomsFlagAction(false, false, true, false, "UPDATE")
    );
    this.props.dispatch(selectedRoomDetails(room));
  }
  goToHomePage() {
    this.props.dispatch(setRoomsFlagAction(false, false));
    // this.props.resetRoomDataValue();
  }
  // componentDidMount() {
  //   //call Room Service
  //   console.log("Room ComponentDidMount : ");
  //   this.props.dispatch(getRoomService());
  //   setTimeout(() => this.setState({ loading: true }), 25000);
  // }

  render() {
    // if (this.state.loading) {
    //   console.log("Printing error : ", this.props.roomList.RoomData);
    // }
    console.log("Room Component : gapArrayData : ", this.props.gapArrayData);
    // Object.keys(this.props.gapArrayData.gapArray).forEach(function(key) {
    //   var value = key;
    //   console.log("Key : " + key + ":" + value);
    // });

    let localFilterRoomData = [];
    let selectClass;
    let titleData;
    let gapArrayLen = 0;
    var returnRoomDisplayData = "";

    if (this.props.filterRoomData.filterData.length === 0) {
      //check for empty object string
      //erroComponent show
      if (this.props.errorData) {
        returnRoomDisplayData = <ErrorContainer />;
      } else {
        returnRoomDisplayData = "Hello data is loading";
      }
    } else {
      if (this.props.filterRoomData) {
        localFilterRoomData = this.props.filterRoomData.filterData;
      }

      returnRoomDisplayData = localFilterRoomData.map((room, i) => {
        if (room.BookedEmployeeDetails.length === 0) {
          console.log("2");
          selectClass = "roomDetails room-vacant";
          titleData = "Add A New Room";
        } else {
          let countTwos = 0;
          this.props.gapArrayData.gapArray.map((gapRoom, i) => {
            if (gapRoom.RoomID === room.RoomID) {
              gapArrayLen = gapRoom.gap.length;
              gapRoom.gap.map((gap, i) => {
                if (gap.occupany === 2) {
                  console.log("INSIDE IF LOOP ");
                  countTwos++;
                }
              });
              if (countTwos === gapArrayLen) {
                selectClass = "roomDetails room-booked";
                titleData = "Booking is Full";
              } else {
                selectClass = "roomDetails room-partialbooked";
                titleData = "Add A New Room";
              }
            }
          });
        }
        return (
          <div className="room" key={i}>
            <div
              className={selectClass}
              onClick={() => this.callAddNewBooking(room)}
              title={titleData}
            >
              <label className="roomLabel">Room Number</label>
              <label className="roomNumber">{room.RoomID}</label>
            </div>
            <div className="buttonHolder" title="Edit Your Bookings">
              <a
                href="#"
                onClick={() => this.callViewEditPage(room)}
                className="roomEdit"
              >
                EDIT
              </a>
            </div>
          </div>
        );
      });
    }
    return (
      <div className="roomAvailability">
        <div className="row">
          <div className="col-sm-12">
            <h1 className="info">Room Availability </h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 roomList">{returnRoomDisplayData}</div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-4 legend">
            <div className="legend-available" />
            <label className="legendInfo">Available</label>
          </div>
          <div className="col-sm-4 legend">
            <div className="legend-partial" />
            <label className="legendInfo">
              1 Person Accomodation Available
            </label>
          </div>

          <div className="col-sm-4 legend">
            <div className="legend-full" />
            <label className="legendInfo">Not Available</label>
          </div>
        </div>


      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    filterRoomData: state.filterRoomData,
    showRoomFlag: state.showRoomFlag,
    selectedDates: state.dateReducer,
    gapArrayData: state.gapArrayData,
    roomList: state.roomList,
    errorData: state.errorData
  };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(
//     {
//       setRoomsFlagAction: setRoomsFlagAction,
//       resetRoomDataValue: resetRoomDataValue,
//       selectedRoomDetails: selectedRoomDetails
//     },
//     dispatch
//   );
// }

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(Rooms);
