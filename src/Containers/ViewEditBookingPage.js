import React from "react";
import { bindActionCreators } from "redux";
//import { editSelectedBooking, deleteSelectedBooking } from "../Actions";
import {
  showAddRoomsBookingPage,
  selectedEmployeeDetails,
  deleteEmployeeDetails,
  setAddOrUpdateFlag
} from "../Actions";
import { connect } from "react-redux";

class ViewEditBookingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.goToHomePage = this.goToHomePage.bind(this);
    this.callUpdate = this.callUpdate.bind(this);
    this.callDelete = this.callDelete.bind(this);
  }
  goToHomePage() {
    // console.log("CAll action to go to HomePage");
    this.props.showAddRoomsBookingPage(false, true);
  }
  callUpdate(employeeDetail) {
    //call method to set addflag true
    // this.props.showViewEditBookingPage(true, false, false);
    this.props.selectedEmployeeDetails(employeeDetail);
    this.props.setAddOrUpdateFlag(true, false, false, "UPDATE");
  }
  callDelete(employeeDetail) {
    // this.props.selectedEmployeeDetails(employeeDetail);
    this.props.deleteEmployeeDetails(employeeDetail);
  }
  render() {
    console.log("selectedRoomDetails");
    console.log(this.props.selectedRoomDetails);
    let empLen = this.props.selectedRoomDetails.selectedRoom
      .BookedEmployeeDetails.length;
    let bookedEmpData;
    if (empLen > 0) {
      //list of employees checkin checkout --> Update Delete
      bookedEmpData = this.props.selectedRoomDetails.selectedRoom.BookedEmployeeDetails.map(
        (employeeDetail, i) => {
          return (
            <div className="listView">
              <div className="row">
                <div className="col-sm-8">
                  <div className="bookingDetails">
                    <div className="empDetails">
                      <label className="name">
                        {employeeDetail.EmployeeName}
                      </label>
                    </div>
                    <div className="dateDetails">
                      <div className="checkIn">
                        <label className="labelFor">Check-in Date</label>
                        <label className="labelValue">
                          {employeeDetail.CheckInDate}
                        </label>
                      </div>
                      <div className="checkOut">
                        <label className="labelFor">Check-out Date</label>
                        <label className="labelValue">
                          {employeeDetail.CheckOutDate}
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-2 updateButton">
                  <a href="#">
                    <img
                      className="icon"
                      src="https://uploads.codesandbox.io/uploads/user/6444487a-0c5d-4d9e-9810-7b77e5217f18/WJek-Edit.png"
                      alt="Update"
                      onClick={() => this.callUpdate(employeeDetail)}
                    />
                  </a>
                </div>
                <div className="col-sm-2 deleteButton">
                  <a href="#">
                    <img
                      className="icon"
                      src="https://uploads.codesandbox.io/uploads/user/6444487a-0c5d-4d9e-9810-7b77e5217f18/j2Gb-delete.png"
                      alt="Delete"
                      onClick={() => this.callDelete(employeeDetail)}
                    />
                  </a>
                </div>
              </div>
            </div>
          );
        }
      );
    } else {
      bookedEmpData = (
        <div className="row">
          <div className="col-sm-12 text-center">
            <hr />
            <label className="errorMsg">
              There is no Booking for this Room
            </label>
          </div>
        </div>
      );
    }

    return (
      <div className="viewBooking">
        <div className="form-group">
          <a href="#" onClick={this.goToHomePage}>
            Back
          </a>
        </div>
        <h1 className="pageTitle">View Bookings</h1>
        <div className="row">
          <div className="col-sm-4 viewBookingPanel">
            <label className="labelFor">Room Number</label>
            <label className="labelValue">
              {this.props.selectedRoomDetails.selectedRoom.RoomID}
            </label>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4 viewBookingPanel">
            <label className="labelFor">Room Type</label>
            <label className="labelValue">
              {this.props.selectedRoomDetails.selectedRoom.RoomType}
            </label>
          </div>
        </div>
        {bookedEmpData}
        <hr />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    selectedRoomDetails: state.selectedRoomDetails,
    roomsList: state.roomsList
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      showAddRoomsBookingPage: showAddRoomsBookingPage,
      selectedEmployeeDetails: selectedEmployeeDetails,
      deleteEmployeeDetails: deleteEmployeeDetails,
      setAddOrUpdateFlag: setAddOrUpdateFlag
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewEditBookingPage);
