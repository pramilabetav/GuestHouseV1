import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ModernDatepicker from "react-modern-datepicker";
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
      roomType: "",
      alertClassName: "row hideAlert",
      message: ""
    };
    this.goToHomePage = this.goToHomePage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handle_checkIn = this.handle_checkIn.bind(this);
    this.handle_checkOut = this.handle_checkOut.bind(this);
    this.handle_empId = this.handle_empId.bind(this);
    this.handle_empName = this.handle_empName.bind(this);
    this.handle_managerName = this.handle_managerName.bind(this);
    this.handle_projectId = this.handle_projectId.bind(this);
    //   // this.handle_occupants = this.handle_occupants.bind(this);
    //   this.handle_roomNo = this.handle_roomNo.bind(this);
    //   this.handle_roomType = this.handle_roomType.bind(this);
    // }
    // componentDidMount() {
    if (this.props.showRoomFlag.addOrUpdate === "UPDATE") {
      let checkdatein = new Date(
        this.props.selectedEmployeeDetails.employeeDetails.CheckInDate
      );
      this.setState({
        empId: this.props.selectedEmployeeDetails.employeeDetails.EmployeeID,
        empName: this.props.selectedEmployeeDetails.employeeDetails
          .EmployeeName,
        checkIn: this.props.selectedEmployeeDetails.employeeDetails.CheckInDate,
        checkOut: this.props.selectedEmployeeDetails.employeeDetails
          .CheckOutDate,
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
  handle_checkIn(date) {
    this.setState({
      checkIn: date
    });
  }
  handle_checkOut(date) {
    this.setState({
      checkOut: date
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
  // handle_occupants(e) {
  //   this.setState({
  // occupants: e.target.value
  //   });
  // }
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
    let copyOfRoomdata = [];
    let countEmpID = 0;
    copyOfRoomdata = [
      ...copyOfRoomdata,
      ...JSON.parse(JSON.stringify(this.props.roomsList.RoomData))
    ];
    //check empId doent not exist in the existing RoomData
    copyOfRoomdata.map((room, i) => {
      room.BookedEmployeeDetails.map((employee, i) => {
        if (this.state.empId === employee.EmployeeID) {
          countEmpID++;
        }
      });
    });

    if (countEmpID > 0 && this.props.showRoomFlag.addOrUpdate !== "UPDATE") {
      this.setState({
        alertClassName: "row showAlert",
        message: "Booking is already done for this Employee"
      });
      document.getElementById("message").focus();
      return;
    }

    if (
      this.state.empId !== "" &&
      this.state.checkIn !== "" &&
      this.state.checkOut !== ""
    ) {
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
      this.setState({
        alertClassName: "row showAlert",
        message: "Please provide all values"
      });
      document.getElementById("message").focus();
    }
    //Pummy
    let checkInDateCompare = this.state.checkIn;
    let checkOutDateCompare = this.state.checkOut;
    let localVar = copyOfRoomdata.map((room, i) => {
      if (this.props.selectedRoomDetails.selectedRoom.RoomID === room.RoomID) {
        room.BookedEmployeeDetails = room.BookedEmployeeDetails.filter(
          (employee, i) => {
            let CI = checkInDateCompare;
            let CO = checkOutDateCompare;
            let ECI   = employee.CheckInDate;
            let ECO = employee.CheckOutDate;

            //1
            if (CI === ECI && (CO >= ECO || CO < ECO)) {
              console.log("ROOMID --------> ", room.RoomID);
              console.log("1 : Overlap condition ");
              return employee;
            }
            //2.1
            else if (
              ((CI > ECI && CI < ECO) || CI < ECI) &&
              (CO > ECI && CO < ECO)
            ) {
              console.log("ROOMID --------> ", room.RoomID);
              console.log("2.1 : CI Open End OR SubSet ");
              return employee;
            }
            //2.2
            else if (CI > ECI && CI < ECO && (CO >= ECO || CO < ECO)) {
              console.log("ROOMID --------> ", room.RoomID);
              console.log("2.2 : CO Open End OR SubSet ");
              return employee;
            }
            //3
            else if (CI < ECI && CO > ECO) {
              console.log("ROOMID --------> ", room.RoomID);
              console.log("3 : CI and CO Open End OR SuperSet ");
              return employee;
            }
            //4
            else if (CI <= ECI && CO > ECI && CO <= ECO) {
              console.log("ROOMID --------> ", room.RoomID);
              console.log("4 : CI subset and CO Open End ");
              return employee;
            }
          }
        );
      }
      return room;
    });
    //Betav

    let empArrLen,
      capacity = 0;
    localVar.map((room, i) => {
      if (this.props.selectedRoomDetails.selectedRoom.RoomID === room.RoomID) {
        empArrLen = room.BookedEmployeeDetails.length;
        capacity = room.Capacity;
      }
      return room;
    });
    if (this.props.showRoomFlag.addOrUpdate === "UPDATE") {
      // if (empArrLen === parseInt(capacity, 10)) {
      //   this.setState({
      //     alertClassName: "row showAlert",
      //     message:
      //       "Selected ROOM Is FULL for Selected Dates, Change your dates or Room"
      //   });
      //   document.getElementById("message").focus();
      // } else {
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
      // }
    } else {
      if (empArrLen === parseInt(capacity, 10)) {
        this.setState({
          alertClassName: "row showAlert",
          message:
            "Selected ROOM Is FULL for Selected Dates, Change your dates or Room"
        });
        document.getElementById("message").focus();
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
          // occupants: "",
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
        <div className={this.state.alertClassName}>
          <div className="col-sm-12 text-center">
            <div class="alert alert-danger message" id="message" tabIndex="0">
              <strong>Danger!</strong> {this.state.message}
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-sm-3" />
          <div className="col-sm-6 addRoom">
            <div className="form-group">
              <label>
                <a href="#" onClick={this.goToHomePage}>
                  Back
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
              <label>CheckIn date :</label>
              <ModernDatepicker
                date={this.state.checkIn}
                format={"DD-MM-YYYY"}
                showBorder
                className="cal"
                onChange={date => this.handle_checkIn(date)}
                placeholder={"Select a date"}
              />
            </div>
            <div className="form-group">
              <label>CheckOut date :</label>
              <ModernDatepicker
                date={this.state.checkOut}
                format={"DD-MM-YYYY"}
                showBorder
                className="cal"
                onChange={date => this.handle_checkOut(date)}
                placeholder={"Select a date"}
              />
            </div>
            <div className="form-group">
              <label>EmployeeID :</label>
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
