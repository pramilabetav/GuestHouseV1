import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import moment from "moment";
// import { selectedRoomDetails } from "../Actions";
import {
  showAddRoomsBookingPage,
  resetRoomDataValue,
  selectedRoomDetails,
  showViewEditBookingPage
} from "../Actions";

class Rooms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pummyData: [],
      filterData: []
    };
    this.goToHomePage = this.goToHomePage.bind(this);
    this.callAddNewBooking = this.callAddNewBooking.bind(this);
    this.callViewEditPage = this.callViewEditPage.bind(this);
  }
  callAddNewBooking(room) {
    // console.log("Call showAddRoomsBookingPage method from Rooms component");
    // console.log("RoomDetails", room);
    this.props.showAddRoomsBookingPage(true, false);
    this.props.selectedRoomDetails(room);
  }
  callViewEditPage(room) {
    this.props.showViewEditBookingPage(false, false, true);
    this.props.selectedRoomDetails(room);
  }
  goToHomePage() {
    // console.log("CAll action to go to HomePage");
    this.props.showAddRoomsBookingPage(false, false);
    // this.props.resetRoomDataValue();
  }
  componentDidMount() {
    let filterData = [];
    // console.log(
    //   "CALLING this.props.roomsList.RoomData  ##########",
    //   this.props.roomsList.RoomData,
    //   "   BEFORE assigning filterDAta : ",
    //   filterData
    // );
    filterData = [
      ...this.state.filterData,
      ...JSON.parse(JSON.stringify(this.props.roomsList.RoomData))
    ];
    console.log(
      "CALLING componenetDidMount this.props.roomsList.RoomData : ",
      this.props.roomsList.RoomData,
      " and filterDAta : ",
      filterData
    );
    let localVar = filterData.map((room, i) => {
      room.BookedEmployeeDetails = room.BookedEmployeeDetails.filter(
        employee => {
          console.log("employee.CheckInDate : ", employee.CheckInDate);
          console.log(
            "this.props.showRoomFlag.checkInDate : ",
            moment(this.props.selectedDates.checkInDate).format("MM-DD-YYYY")
          );
          if (
            moment(employee.CheckInDate).format("MM-DD-YYYY") ==
            moment(this.props.selectedDates.checkInDate).format("MM-DD-YYYY")
          ) {
            return employee;
          }
        }
      );
      return room;
    });
    this.setState({
      pummyData: [
        ...this.state.pummyData,
        ...JSON.parse(JSON.stringify(localVar))
      ]
    });
    localVar = [];
    console.log(
      "ComponentDidMount --> After Filter : filterData = ",
      filterData,
      " localVar : ",
      localVar
    );
    console.log("ComponentDidMount --> After Filter : localVar = ", localVar);
    console.log(
      "ComponentDidMount --> After Filter : this.state.pummyData = ",
      this.state.pummyData
    );
  }
  render() {
    console.log("ROOM_COMPONENT: printing showRoomFlag value === ");
    console.log(this.props.showRoomFlag);
    console.log(
      "ROOM_COMPONENT: RENDER method pummyData value === ",
      this.state.pummyData
    );
    console.log("*********************************************");
    let selectClass;
    // let counter = 0;
    // let returnMatchedRoom;
    // this.state.pummyData[0].map((pummy, i) => {
    //   console.log("CHECKING +++++ ", pummy);
    // });

    var returnRoomDisplayData = this.state.pummyData.map((room, i) => {
      // room.BookedEmployeeDetails.map((employee, i) => {
      //   if (employee.CheckInDate) {
      //     returnMatchedRoom = room.BookedEmployeeDetails.filter(
      //       emp =>
      //         emp.CheckInDate ===
      //         moment(this.props.showRoomFlag.checkInDate).format("MM-DD-YYYY")
      //     );
      //   }
      //   console.log(
      //     "returnMatchedRoom^^^^^^^^^^^^^^^^^^^^^^^^^",
      //     returnMatchedRoom
      //   );
      // });

      if (room.BookedEmployeeDetails.length === parseInt(room.Capacity, 10)) {
        selectClass = "roomDetails room-booked";
      } else if (
        room.BookedEmployeeDetails.length < parseInt(room.Capacity, 10) &&
        room.BookedEmployeeDetails.length > "0"
      ) {
        selectClass = "roomDetails room-partialbooked";
      } else {
        selectClass = "roomDetails room-vacant";
      }
      return (
        <div className="room" key={i}>
          <div
            className={selectClass}
            onClick={() => this.callAddNewBooking(room)}
            title="Add A New Room"
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

    return (
      <div className="roomAvailability">
        <div className="row">
          <div className="col-sm-12">
            <a href="#" onClick={this.goToHomePage}>
              Back
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <h1 className="info">Room Availability for </h1>
            <hr />
            <label className="info">Search for </label>
            <label className="info">
              {moment(this.props.selectedDates.checkInDate).format(
                "DD-MMM-YYYY"
              )}
            </label>
            <label className="info"> to </label>
            <label className="info">
              {moment(this.props.selectedDates.checkOutDate).format(
                "DD-MMM-YYYY"
              )}
            </label>

            <h2 />
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
    roomsList: state.roomsList,
    showRoomFlag: state.showRoomFlag,
    selectedDates: state.dateReducer
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      showAddRoomsBookingPage: showAddRoomsBookingPage,
      resetRoomDataValue: resetRoomDataValue,
      selectedRoomDetails: selectedRoomDetails,
      showViewEditBookingPage: showViewEditBookingPage
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Rooms);
