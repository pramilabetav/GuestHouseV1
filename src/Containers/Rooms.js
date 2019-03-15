import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// import { selectedRoomDetails } from "../Actions";
import {
  setRoomsFlagAction,
  resetRoomDataValue,
  selectedRoomDetails
} from "../Actions";

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
    this.props.setRoomsFlagAction(false, true);
    this.props.selectedRoomDetails(room);
  }
  callViewEditPage(room) {
    this.props.setRoomsFlagAction(false, false, true, false, "UPDATE");
    this.props.selectedRoomDetails(room);
  }
  goToHomePage() {
    this.props.setRoomsFlagAction(false, false);
    // this.props.resetRoomDataValue();
  }
  render() {
    let localFilterRoomData = [];
    if (this.props.filterRoomData) {
      localFilterRoomData = this.props.filterRoomData.filterData;
    }
    let selectClass;
    let titleData;
    var returnRoomDisplayData = localFilterRoomData.map((room, i) => {
      if (room.BookedEmployeeDetails.length >= parseInt(room.Capacity, 10)) {
        selectClass = "roomDetails room-booked";
        titleData = "Booking is Full";
      } else if (
        room.BookedEmployeeDetails.length < parseInt(room.Capacity, 10) &&
        room.BookedEmployeeDetails.length > "0"
      ) {
        selectClass = "roomDetails room-partialbooked";
        titleData = "Add A New Room";
      } else {
        selectClass = "roomDetails room-vacant";
        titleData = "Add A New Room";
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
    <div className="row">
      <div className="col-sm-12">
        <a href="#" onClick={this.goToHomePage}>
          Back
        </a>
      </div>
    </div>;
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
    selectedDates: state.dateReducer
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setRoomsFlagAction: setRoomsFlagAction,
      resetRoomDataValue: resetRoomDataValue,
      selectedRoomDetails: selectedRoomDetails
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Rooms);
