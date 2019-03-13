import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import moment from "moment";
import {
  submitNewBooking,
  updateExisitingBooking,
  setRoomsFlagAction,
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
    if (this.props.showRoomFlag.addOrUpdate === "UPDATE") {
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
  }
  goToHomePage() {
    if (this.props.showRoomFlag.addOrUpdate === "UPDATE") {
      this.props.setRoomsFlagAction(false, false, true);
    } else {
      this.props.setRoomsFlagAction(true, false);
    }
  }
  handle_checkIn(e) {
    this.setState({
      checkIn: moment(e.target.value).format("YYYY-MM-DD")
    });
  }
  handle_checkOut(e) {
    this.setState({
      checkOut: moment(e.target.value).format("YYYY-MM-DD")
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
    } else {
      alert("Please provide values");
    }
    //check roomsList is coming here :
    console.log(
      "AddNewBooking : handleSubmit() : roomsList ",
      this.props.roomsList
    );
    let copyOfRoomdata = [];
    copyOfRoomdata = [
      ...copyOfRoomdata,
      ...JSON.parse(JSON.stringify(this.props.roomsList.RoomData))
    ];

    let localVar = copyOfRoomdata.map((room, i) => {
      room.BookedEmployeeDetails = room.BookedEmployeeDetails.filter(
        (employee, i) => {
          if (
            moment(this.state.checkIn).format("MM-DD-YYYY") ===
              moment(employee.CheckInDate).format("MM-DD-YYYY") &&
            moment(this.state.checkOut).format("MM-DD-YYYY") ===
              moment(employee.CheckOutDate).format("MM-DD-YYYY")
          ) {
            return employee;
          }
        }
      );
      return room;
    });

    console.log("AddNewBooking : localVar : Printing ", localVar);
    let empArrLen,
      capacity = 0;
    localVar.map((room, i) => {
      if (this.props.selectedRoomDetails.selectedRoom.RoomID === room.RoomID) {
        empArrLen = room.BookedEmployeeDetails.length;
        capacity = room.Capacity;
      }
      return room;
    });
    console.log(
      "empArrLen : capacity : ",
      empArrLen,
      " Type : ",
      typeof empArrLen,
      " , ",
      " capacity : ",
      capacity,
      " TypeOf : ",
      typeof capacity
    );
    if (this.props.showRoomFlag.addOrUpdate === "UPDATE") {
      if (empArrLen === parseInt(capacity, 10)) {
        alert(
          "Selected ROOM Is FULL for Selected Dates, Change your dates or Room"
        );
      } else {
        this.props.updateExisitingBooking(updatedEmployeeObject);
        //bookedDetails call to have newly added employeed details to successpage
        this.props.bookedDetails(updatedEmployeeObject);
        this.props.setRoomsFlagAction(false, false, false, true);
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
    } else {
      if (empArrLen === parseInt(capacity, 10)) {
        alert(
          "Selected ROOM Is FULL for Selected Dates, Change your dates or Room"
        );
      } else {
        this.props.submitNewBooking(updatedEmployeeObject);
        //bookedDetails call to have newly added employeed details to successpage
        this.props.bookedDetails(updatedEmployeeObject);
        this.props.setRoomsFlagAction(false, false, false, true);
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
    }
  }
  render() {
    //Check actionFlag value == ADD or UPDATE
    //UPDATE selectedemployeedetails set to input fields
    //Add blank values should be set to field values

    return (
      <div>
        <div className="row">
          <div className="col-sm-3" />
          <div className="col-sm-6">
            <div class="alert alert-danger">
              <strong>Danger!</strong> Selected ROOM Is FULL for Selected Dates,
              Change your dates or Room.
            </div>
          </div>
          <div className="col-sm-3" />
        </div>
        <div className="row ">
          <div className="col-sm-3" />
          <div className="col-sm-6 addRoom">
            <div className="form-group">
              <label>
                <a href="#" onClick={this.goToHomePage}>
                  Back{" "}
                </a>
              </label>
            </div>
            <div className="form-group">
              <label>Room No :</label>{" "}
              <label>
                {this.props.selectedRoomDetails.selectedRoom.RoomID}
              </label>
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
              {this.props.showRoomFlag.addOrUpdate === "UPDATE" ? (
                <label>{this.state.empId}</label>
              ) : (
                <input
                  type="text"
                  name="empId"
                  value={this.state.empId}
                  onChange={e => this.handle_empId(e)}
                  className="form-control"
                />
              )}
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
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    // bookedRoomsList: state.bookedRoomsList,
    roomsList: state.roomsList,
    selectedRoomDetails: state.selectedRoomDetails,
    showRoomFlag: state.showRoomFlag,
    selectedEmployeeDetails: state.selectedEmployeeDetails
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      submitNewBooking: submitNewBooking,
      updateExisitingBooking: updateExisitingBooking,
      setRoomsFlagAction: setRoomsFlagAction,
      bookedDetails: bookedDetails
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddNewBooking);
