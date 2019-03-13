import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import moment from "moment";
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
  componentDidMount() {
    console.log("ROOMS : ComponentDidMount");
    // let filterData = [];
    // filterData = [
    //   ...this.state.initialFilterState,
    //   ...JSON.parse(JSON.stringify(this.props.filterRoomData.RoomData))
    // ];
    // let localVar = filterData.map((room, i) => {
    //   room.BookedEmployeeDetails = room.BookedEmployeeDetails.filter(
    //     (employee, i) => {
    //       let CI = moment(this.props.selectedDates.checkInDate).format(
    //         "MM-DD-YYYY"
    //       );
    //       let CO = moment(this.props.selectedDates.checkOutDate).format(
    //         "MM-DD-YYYY"
    //       );
    //       let ECI = moment(employee.CheckInDate).format("MM-DD-YYYY");
    //       let ECO = moment(employee.CheckOutDate).format("MM-DD-YYYY");
    //       //1
    //       if (CI === ECI && (CO >= ECO || CO < ECO)) {
    //         console.log("ROOMID --------> ", room.RoomID);
    //         console.log("1 : Overlap condition ");
    //         return employee;
    //       }
    //       //2.1
    //       else if (
    //         ((CI > ECI && CI < ECO) || CI < ECI) &&
    //         (CO > ECI && CO < ECO)
    //       ) {
    //         console.log("ROOMID --------> ", room.RoomID);
    //         console.log("2.1 : CI Open End OR SubSet ");
    //         return employee;
    //       }
    //       //2.2
    //       else if (CI > ECI && CI < ECO && (CO >= ECO || CO < ECO)) {
    //         console.log("ROOMID --------> ", room.RoomID);
    //         console.log("2.2 : CO Open End OR SubSet ");
    //         return employee;
    //       }
    //       //3
    //       else if (CI < ECI && CO > ECO) {
    //         console.log("ROOMID --------> ", room.RoomID);
    //         console.log("3 : CI and CO Open End OR SuperSet ");
    //         return employee;
    //       }
    //     }
    //   );
    //   return room;
    // });
    // console.log("HELLO : localVar : ", localVar);
    // this.setState({
    //   roomDataCopy: [
    //     ...this.state.roomDataCopy,
    //     ...JSON.parse(JSON.stringify(localVar))
    //   ]
    // });
    // localVar = [];
  }
  componentWillUnmount() {
    // console.log("Rooms : Component will Unmount is called : ");
  }
  componentWillReceiveProps(props) {
    // console.log("Rooms : componentWillReceiveProps is called : ", props);
  }
  componentWillUpdate() {
    // console.log("Rooms :  componentWillUpdateis called : ");
  }
  componentDidUpdate() {
    // console.log("Rooms :  componentDidUpdate is called : ");
  }
  shouldComponentUpdate() {
    // console.log("Rooms :  shouldComponentUpdate is called : ");
    return true;
  }
  render() {
    let localFilterRoomData = [];
    if (this.props.filterRoomData) {
      console.log(
        "ROOMS : filterRoomData props",
        (localFilterRoomData = this.props.filterRoomData.filterData)
      );
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
