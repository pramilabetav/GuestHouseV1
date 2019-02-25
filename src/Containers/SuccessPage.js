import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { showAddRoomsBookingPage } from "../Actions";

class SuccessPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handle_click = this.handle_click.bind(this);
  }
  handle_click() {
    this.props.showAddRoomsBookingPage(false, true);
  }
  render() {
    // console.log("CONGRATULATIONS PAGE : ", this.props.roomsList);
    return (
      <div className="row ">
        <div className="col-sm-12">
          <h3 className="message">Congratulation! your booking is done</h3>
          <hr />
          <div className="bookingConfirmation">
            <div className="form-group">
              <label> Room Number </label>
              <label>{this.props.bookedRoomsList.bookedDetails.RoomID}</label>
            </div>
            <div className="form-group">
              <label> Employee Name </label>
              <label>
                {this.props.bookedRoomsList.bookedDetails.EmployeeName}
              </label>
            </div>
            <div className="form-group">
              <label>Room Type</label>
              <label>{this.props.bookedRoomsList.bookedDetails.RoomType}</label>
            </div>
            <div className="form-group">
              <label>Check In Date</label>
              <label>
                {this.props.bookedRoomsList.bookedDetails.CheckInDate}
              </label>
            </div>
            <div className="form-group">
              <label>Check Out Date</label>
              <label>
                {this.props.bookedRoomsList.bookedDetails.CheckOutDate}
              </label>
            </div>
          </div>
          <hr />
          <div className="form-group">
            <button
              className="btn btn-primary"
              name="success"
              onClick={this.handle_click}
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    bookedRoomsList: state.bookedRoomsList,
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
)(SuccessPage);
