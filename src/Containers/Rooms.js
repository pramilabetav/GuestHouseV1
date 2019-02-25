import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// import { selectedRoomDetails } from "../Actions";
import {
  showAddRoomsBookingPage,
  selectedRoomDetails,
  showViewEditBookingPage
} from "../Actions";

class Rooms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.callAddNewBooking = this.callAddNewBooking.bind(this);
    this.callViewEditPage = this.callViewEditPage.bind(this);
  }
  callAddNewBooking(room) {
    // console.log("Call showAddRoomsBookingPage method from Rooms component");
    // console.log("RoomDetails", room);
    this.props.showAddRoomsBookingPage(true, false);
    this.props.selectedRoomDetails(room);
  }
  callViewEditPage(room) {
    this.props.showViewEditBookingPage(false, false, true);
    this.props.selectedRoomDetails(room);
  }
  render() {
    console.log("ROOM_COMPONENT: printing roomdata value === ");
    console.log(this.props.roomsList);
    console.log("*********************************************");
    let selectClass;
    var displayRoomList = this.props.roomsList.RoomData.map((room, i) => {
      if (room.BookedEmployeeDetails.length === parseInt(room.Capacity, 10)) {
        selectClass = "roomDetails room-booked";
      } else if (
        room.BookedEmployeeDetails.length < parseInt(room.Capacity, 10) &&
        room.BookedEmployeeDetails.length > "0"
      ) {
        selectClass = "roomDetails room-partialbooked";
      } else {
        selectClass = "roomDetails room-vacant";
      }
      // console.log("Applied CSS on Room Component : ", selectClass);
      return (
        <div className="room" key={i}>
          <div
            className={selectClass}
            onClick={() => this.callAddNewBooking(room)}
          >
            <label className="roomLabel">Room Number</label>
            <label className="roomNumber">{room.RoomID}</label>
          </div>
          <div className="buttonHolder">
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

    return (
      <div className="roomAvailability">
        <div className="row">
          <div className="col-sm-12">
            <h1 className="pageTitle">Room Availability</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 roomList">{displayRoomList}</div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-2">
            <div className="legend-available" />
            <label className="legendInfo">Available</label>
          </div>
          <div className="col-sm-2">
            <div className="legend-partial" />
            <label className="legendInfo">
              1 Person Accomodation Available
            </label>
          </div>

          <div className="col-sm-2">
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
    roomsList: state.roomsList
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      showAddRoomsBookingPage: showAddRoomsBookingPage,
      selectedRoomDetails: selectedRoomDetails,
      showViewEditBookingPage: showViewEditBookingPage
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Rooms);
