import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import moment from "moment";
import {
  showAddRoomsBookingPage,
  submitNewBooking,
  updateExisitingBooking,
  showSuccessPage,
  bookedDetails
} from "../Actions";

class AddNewBooking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkIn: "",
      checkOut: "",
      empId: "",
      empName: "",
      managerName: "",
      projectId: "",
      occupants: "",
      roomNo: "",
      roomType: ""
    };
    this.goToHomePage = this.goToHomePage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handle_checkIn = this.handle_checkIn.bind(this);
    this.handle_checkOut = this.handle_checkOut.bind(this);
    this.handle_empId = this.handle_empId.bind(this);
    this.handle_empName = this.handle_empName.bind(this);
    this.handle_managerName = this.handle_managerName.bind(this);
    this.handle_projectId = this.handle_projectId.bind(this);
    this.handle_occupants = this.handle_occupants.bind(this);
    this.handle_roomNo = this.handle_roomNo.bind(this);
    this.handle_roomType = this.handle_roomType.bind(this);
  }
  componentDidMount() {
    console.log("CALLING componentDidMoount Funtion ");
    if (this.props.showRoomFlag.addOrUpdate === "UPDATE") {
      console.log(
        "CLICKED EDIT ICON from update page VALUE : " +
          this.props.showRoomFlag.addOrUpdate
      );
      console.log("selectedEmployeeDetails ==");
      console.log(this.props.selectedEmployeeDetails);
      console.log(
        "BEFORE parse into date " +
          this.props.selectedEmployeeDetails.employeeDetails.CheckInDate
      );
      let checkdatein = new Date(
        this.props.selectedEmployeeDetails.employeeDetails.CheckInDate
      );
      this.setState({
        empId: this.props.selectedEmployeeDetails.employeeDetails.EmployeeID,
        empName: this.props.selectedEmployeeDetails.employeeDetails
          .EmployeeName,
        checkIn: moment(
          this.props.selectedEmployeeDetails.employeeDetails.CheckInDate
        ).format("YYYY-MM-DD"),
        checkOut: moment(
          this.props.selectedEmployeeDetails.employeeDetails.CheckOutDate
        ).format("YYYY-MM-DD"),
        managerName: this.props.selectedEmployeeDetails.employeeDetails
          .ManagerName,
        projectId: this.props.selectedEmployeeDetails.employeeDetails.ProjectID
        //   occupants: "1"
      });
    }
    console.log(
      " After check this.state.checkIn = " +
        this.state.checkIn +
        " TYPEOF  " +
        typeof this.state.checkIn
    );
  }
  goToHomePage() {
    // console.log("CAll action to go to HomePage");
    this.props.showAddRoomsBookingPage(false, true);
  }
  handle_checkIn(e) {
    // console.log("CHECK TYPE OF this input date : ");
    // console.log(document.getElementsByName("checkIn"));
    // console.log("TYPE OF == " + typeof document.getElementsByName("checkIn"));
    this.setState({
      checkIn: e.target.value
    });
  }
  handle_checkOut(e) {
    this.setState({
      checkOut: e.target.value
    });
  }
  handle_empId(e) {
    this.setState({
      empId: e.target.value
    });
  }
  handle_empName(e) {
    this.setState({
      empName: e.target.value
    });
  }
  handle_managerName(e) {
    this.setState({
      managerName: e.target.value
    });
  }
  handle_projectId(e) {
    this.setState({
      projectId: e.target.value
    });
  }
  handle_occupants(e) {
    this.setState({
      occupants: e.target.value
    });
  }
  handle_roomNo(e) {
    this.setState({
      roomNo: e.target.value
    });
  }
  handle_roomType(e) {
    this.setState({
      roomType: e.target.value
    });
  }
  handleSubmit(e) {
    let updatedEmployeeObject;
    if (this.state.empId !== "") {
      updatedEmployeeObject = {
        EmployeeName: this.state.empName,
        EmployeeID: this.state.empId,
        ProjectID: this.state.projectId,
        ManagerName: this.state.managerName,
        RoomID: this.props.selectedRoomDetails.selectedRoom.RoomID,
        FloorName: "Floor1",
        RoomType: this.props.selectedRoomDetails.selectedRoom.RoomType,
        ActiveStatus: "Active",
        CheckInDate: this.state.checkIn,
        CheckOutDate: this.state.checkOut
      };
      //console.log("PRINTING : bookedRoomsList ---------> ");
      //console.log(this.props.bookedRoomsList);
    } else {
      alert("Please provide values");
    }
    // console.log("PRINTING NEWLY ADDED ROOM OBJECT : ");
    // console.log(updatedEmployeeObject);
    if (this.props.showRoomFlag.addOrUpdate === "UPDATE") {
      this.props.updateExisitingBooking(updatedEmployeeObject);
    } else {
      this.props.submitNewBooking(updatedEmployeeObject);
    }

    //bookedDetails call to have newly added employeed details to successpage
    this.props.bookedDetails(updatedEmployeeObject);
    this.props.showSuccessPage(true);
    //call success Page
    this.setState({
      checkIn: "",
      checkOut: "",
      empId: "",
      empName: "",
      managerName: "",
      projectId: "",
      occupants: "",
      roomNo: "",
      roomType: ""
    });
  }
  render() {
    //Check actionFlag value == ADD or UPDATE
    //UPDATE selectedemployeedetails set to input fields
    //Add blank values should be set to field values

    return (
      <div className="row ">
        <div className="col-sm-3" />
        <div className="col-sm-6 addRoom">
          <div className="form-group">
            <label>
              <button onClick={this.goToHomePage}>Back </button>
            </label>
          </div>
          <div className="form-group">
            <label>Room No :</label>{" "}
            <label>{this.props.selectedRoomDetails.selectedRoom.RoomID}</label>
          </div>
          <div className="form-group">
            <label>Room Type :</label>{" "}
            <label>
              {this.props.selectedRoomDetails.selectedRoom.RoomType}
            </label>
          </div>
          <div className="form-group">
            <label>No. Of Occupants :</label>
            <select
              value={this.state.occupants}
              onChange={e => this.handle_occupants(e)}
              className="form-control"
            >
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>

          <div className="form-group">
            <label>CheckIn date :</label>{" "}
            <input
              type="date"
              name="checkIn"
              value={this.state.checkIn}
              onChange={e => this.handle_checkIn(e)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>CheckOut date :</label>{" "}
            <input
              type="date"
              name="checkOut"
              value={this.state.checkOut}
              onChange={e => this.handle_checkOut(e)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>EmployeeID :</label>{" "}
            <input
              type="text"
              name="empId"
              value={this.state.empId}
              onChange={e => this.handle_empId(e)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Employee Name :</label>{" "}
            <input
              type="text"
              name="empName"
              value={this.state.empName}
              onChange={e => this.handle_empName(e)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Manager Name :</label>{" "}
            <input
              type="text"
              name="managerName"
              value={this.state.managerName}
              onChange={e => this.handle_managerName(e)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>ProjectID :</label>{" "}
            <input
              type="text"
              name="projectId"
              value={this.state.projectId}
              onChange={e => this.handle_projectId(e)}
              className="form-control"
            />
          </div>
          <div>
            <button
              className="btn btn-md btn-primary"
              type="submit"
              onClick={e => this.handleSubmit(e)}
            >
              Submit
            </button>
          </div>
        </div>
        <div className="col-sm-3" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    bookedRoomsList: state.bookedRoomsList,
    selectedRoomDetails: state.selectedRoomDetails,
    showRoomFlag: state.showRoomFlag,
    selectedEmployeeDetails: state.selectedEmployeeDetails
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      showAddRoomsBookingPage: showAddRoomsBookingPage,
      submitNewBooking: submitNewBooking,
      updateExisitingBooking: updateExisitingBooking,
      showSuccessPage: showSuccessPage,
      bookedDetails: bookedDetails
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddNewBooking);
