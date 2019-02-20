import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { showAddRoomsBookingPage, submitNewBooking } from "../Actions";

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
      occupants: ""
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
  goToHomePage() {
    console.log("CAll action to go to HomePage");
    this.props.showAddRoomsBookingPage(false, true);
  }
  handle_checkIn(e) {
    this.setState({
      checkIn: e.target.value
    });
  }
  handle_checkOut(e) {
    this.setState({
      checkIn: e.target.value
    });
  }
  handle_empId(e) {
    this.setState({
      checkIn: e.target.value
    });
  }
  handle_empName(e) {
    this.setState({
      checkIn: e.target.value
    });
  }
  handle_managerName(e) {
    this.setState({
      checkIn: e.target.value
    });
  }
  handle_projectId(e) {
    this.setState({
      checkIn: e.target.value
    });
  }
  handle_occupants(e) {
    this.setState({
      occupants: e.target.value
    });
  }
  handle_roomNo(e) {
    this.setState({
      checkIn: e.target.value
    });
  }
  handle_roomType(e) {
    this.setState({
      checkIn: e.target.value
    });
  }
  handleSubmit(e) {
    let newRoomObject = {};
    if (true) {
      newRoomObject = {
        EmployeeName: this.state.empName,
        EmployeeID: this.state.empId,
        ProjectID: this.state.projectId,
        ManagerName: this.state.managerName,
        RoomID: this.state.roomI,
        FloorName: "Floor1",
        RoomType: "Shared",
        ActiveStatus: "Active",
        CheckInDate: "02/03/2019",
        CheckOutDate: "05/03/2019"
      };
      console.log("PRINTING : bookedRoomsList ---------> ");
      console.log(this.props.bookedRoomsList);
    } else {
      //add states to the object bookedRoomReducer
    }
    this.props.submitNewBooking(this.props.bookedRoomsList);
  }
  render() {
    return (
      <div>
        <div>
          <label>
            <button onClick={this.goToHomePage}>Back </button>
          </label>
        </div>
        <div>
          <label>Room No :</label>{" "}
          <input
            type="text"
            name="roomNo"
            onChange={e => this.handle_roomNo(e)}
          />
        </div>
        <div>
          <label>Room Type :</label>{" "}
          <input
            type="text"
            name="roomType"
            onChange={e => this.handle_roomType(e)}
          />
        </div>
        <div>
          <label>No. Of Occupants :</label>
          <select onChange={e => this.handle_occupants(e)}>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>

        <div>
          <label>CheckIn date :</label>{" "}
          <input
            type="date"
            name="checkIn"
            onChange={e => this.handle_checkIn(e)}
          />
        </div>
        <div>
          <label>CheckOut date :</label>{" "}
          <input
            type="date"
            name="checkOut"
            onChange={e => this.handle_checkOut(e)}
          />
        </div>
        <div>
          <label>EmployeeID :</label>{" "}
          <input
            type="text"
            name="empId"
            onChange={e => this.handle_empId(e)}
          />
        </div>
        <div>
          <label>Employee Name :</label>{" "}
          <input
            type="text"
            name="empName"
            onChange={e => this.handle_empName(e)}
          />
        </div>
        <div>
          <label>Manager Name :</label>{" "}
          <input
            type="text"
            name="managerName"
            onChange={e => this.handle_managerName(e)}
          />
        </div>
        <div>
          <label>ProjectID :</label>{" "}
          <input
            type="text"
            name="projectId"
            onChange={e => this.handle_projectId(e)}
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
    );
  }
}

function mapStateToProps(state) {
  return {
    bookedRoomsList: state.bookedRoomsList
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      showAddRoomsBookingPage: showAddRoomsBookingPage,
      submitNewBooking: submitNewBooking
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddNewBooking);
