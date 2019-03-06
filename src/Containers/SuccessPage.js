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
    this.props.showAddRoomsBookingPage(false, false);
  }
  render() {
    // console.log("CONGRATULATIONS PAGE : ", this.props.roomsList);
    return (
      <div className="confirmationDetails">
        <div className="row ">
          <div className="col-sm-12 text-center">
            <img
              className="big-icon "
              src="https://uploads.codesandbox.io/uploads/user/6444487a-0c5d-4d9e-9810-7b77e5217f18/WXWR-correctgreen.png"
              alt="success"
            />
            <h3 className="message text-center">
              Congratulation! your booking is done
            </h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-1" />
          <div className="col-sm-10">
            <div className="bookingConfirmation">
              <div className="label-container">
                <label> Room Number </label>
                <label className="labelValue">
                  {this.props.bookedRoomsList.bookedDetails.RoomID}
                </label>
              </div>
              <div className="label-container">
                <label> Employee Name </label>
                <label className="labelValue">
                  {this.props.bookedRoomsList.bookedDetails.EmployeeName}
                </label>
              </div>
              <div className="label-container">
                <label>Room Type</label>
                <label className="labelValue">
                  {this.props.bookedRoomsList.bookedDetails.RoomType}
                </label>
              </div>
              <div className="label-container">
                <label>Check In Date</label>
                <label className="labelValue">
                  {this.props.bookedRoomsList.bookedDetails.CheckInDate}
                </label>
              </div>
              <div className="label-container">
                <label>Check Out Date</label>
                <label className="labelValue">
                  {this.props.bookedRoomsList.bookedDetails.CheckOutDate}
                </label>
              </div>
            </div>
          </div>
          <div className="col-sm-1" />
        </div>
        <div className="row">
          <div className="col-sm-12 text-center">
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
