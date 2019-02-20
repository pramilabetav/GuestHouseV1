import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { showAddRoomsBookingPage } from "../Actions";

class Rooms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.callAddNewBooking = this.callAddNewBooking.bind(this);
  }
  callAddNewBooking() {
    console.log("Call showAddRoomsBookingPage method from Rooms component");
    this.props.showAddRoomsBookingPage(true, false);
  }
  render() {
    console.log("roomsList --------->");
    console.log(this.props.roomsList);
    var displayRoomList = this.props.roomsList.RoomData.map((rooms, i) => (
      <div className="room" key={i}>
        <div class="roomDetails" onClick={this.callAddNewBooking}>
          <lable className="roomLabel">RoomNumber :</lable>
          <label className="roomNumber">{rooms.RoomID}</label>
        </div>
        <div className="buttonHolder">
          <a href="#" className="roomEdit">
            EDIT
          </a>
        </div>
      </div>
    ));

    return <div className="roomList">{displayRoomList}</div>;
  }
}

function mapStateToProps(state) {
  return {
    roomsList: state.roomsList
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { showAddRoomsBookingPage: showAddRoomsBookingPage },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Rooms);
