import React from "react";
// import { bindActionCreators } from "redux";
import moment from "moment";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  setRoomsFlagAction,
  filterRoomData,
  selectedDate,
  setGapArrayValue,
  getRoomService
} from "../Actions";
import ModernDatepicker from "react-modern-datepicker";
let dates, localVar;
class DateContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roomDataCopy: [],
      checkInDateValue: "",
      checkOutDateValue: "",
      checkInDateFlag: false,
      checkOutDateFlag: false,
      results_res: {}
    };
    this.validCheckInDate = this.validCheckInDate.bind(this);
    this.validCheckOutDate = this.validCheckOutDate.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.searchAvailability = this.searchAvailability.bind(this);
    this.findDateSuggestion = this.findDateSuggestion.bind(this);
    this.returnLocalVarData = this.returnLocalVarData.bind(this);
  }

  validCheckInDate(date) {
    this.setState({
      checkInDateValue: date,
      checkInDateFlag: true
    });
  }
  validCheckOutDate(date) {
    console.log("ValidCheckInDate : ", date);
    this.setState({
      checkOutDateValue: date,
      checkOutDateFlag: true
    });
  }
  findDateSuggestion(filterData, checkInDateCompare, checkOutDateCompare) {
    let gapRoomArray = [];
    let empBookings = [];
    let occupiedCounter = 0;

    // let CI = moment(checkInDateCompare).format("DD-MM-YYYY");
    // let CO = moment(checkOutDateCompare).format("DD-MM-YYYY");
    var startDate = moment(checkInDateCompare, "DD-MM-YYYY");
    var endDate = moment(checkOutDateCompare, "DD-MM-YYYY");
    var daysDiff = endDate.diff(startDate, "days");
    var new_date2 = moment(checkInDateCompare, "DD-MM-YYYY");
    let gapObj = [];

    localVar = filterData.map((room, i) => {
      let empLen = room.BookedEmployeeDetails.length;
      console.log("For RoomID --------> ", room.RoomID);
      console.log("Date diff --------> ", daysDiff);
      room.BookedEmployeeDetails = room.BookedEmployeeDetails.filter(
        (employee, i) => {
          console.log("map Counter --------> ", i);
          //1. EmployeeRange
          //2. if length == bookeddetails
          // For i=incrementDate (3-7) and j=EmployeeRange(5)
          // debugger;
          empBookings.push({
            employeeID: employee.EmployeeID,
            employeeCI: employee.CheckInDate,
            employeeCO: employee.CheckOutDate
          });
          console.log("empBookings----->", empBookings);
          // debugger;
          if (i === room.BookedEmployeeDetails.length - 1) {
            for (let x = 0; x < daysDiff; x++) {
              let internalDate = moment(new_date2._d).format("DD-MM-YYYY");
              console.log("internalDate  : ", internalDate);
              console.log("FOR X value : ", x);
              for (let y = 0; y < empBookings.length; y++) {
                console.log("FOR Y value : ", y);
                console.log(
                  "Employee Range : ",
                  empBookings[y].employeeCI,
                  " to ",
                  empBookings[y].employeeCO
                );
                if (
                  internalDate >= empBookings[y].employeeCI &&
                  internalDate < empBookings[y].employeeCO
                ) {
                  ++occupiedCounter;
                  console.log(
                    "If condition : occupiedCounter Value : ",
                    occupiedCounter
                  );
                }
              }
              // gapObj.push({ [internalDate]: occupiedCounter });
              gapObj.push({
                // date_occupancy: internalDate + "$" + occupiedCounter
                date: internalDate,
                occupany: occupiedCounter
              });
              occupiedCounter = 0;
              console.log(
                "####END EMPLOYEE LOOP ########################",
                gapObj
              );
              new_date2.add(1, "days");
              console.log("---------------");
            }
          }
          return employee;
        }
      );
      new_date2 = moment(checkInDateCompare, "DD-MM-YYYY");
      empBookings = [];
      gapRoomArray.push({
        RoomID: room.RoomID,
        gap: gapObj
      });
      gapObj = [];
      console.log("$$$$$END OF ROOM LOOP $$$ , GapRoomArray : ", gapRoomArray);
      return room;
    });

    console.log("DateContainer : gapRoomArray : ", gapRoomArray);
    //Create new reducer for GapArray
    this.props.dispatch(setGapArrayValue(gapRoomArray));
    gapRoomArray = [];
  }
  returnLocalVarData(filterData, checkInDateCompare, checkOutDateCompare) {
    let localData = filterData.map((room, i) => {
      room.BookedEmployeeDetails = room.BookedEmployeeDetails.filter(
        (employee, i) => {
          let CI = moment(checkInDateCompare).format("DD-MM-YYYY");
          let CO = moment(checkOutDateCompare).format("DD-MM-YYYY");
          let ECI = moment(employee.CheckInDate).format("DD-MM-YYYY");
          let ECO = moment(employee.CheckOutDate).format("DD-MM-YYYY");
          //1
          console.log("Which EmployeeID : ", employee.EmployeeID);
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
          console.log("######################################################");
        }
      );
      return room;
    });
    return localData;
  }
  searchAvailability() {
    let filterData = [];
    let checkInDateCompare;
    let checkOutDateCompare;
    let gapRoomArray = [];
    let empBookings = [];
    let occupiedCounter = 0;

    // let gapArray = [];
    if (this.state.checkInDateValue && this.state.checkOutDateValue) {
      checkInDateCompare = this.state.checkInDateValue;
      checkOutDateCompare = this.state.checkOutDateValue;
    } else {
      if (this.props.selectedDateReducer) {
        checkInDateCompare = this.props.selectedDateReducer.checkInDate;
        checkOutDateCompare = this.props.selectedDateReducer.checkOutDate;
      }
    }
    filterData = [
      ...filterData,
      ...JSON.parse(JSON.stringify(this.props.roomsList.RoomData))
    ];
    //call function suggestion function here
    this.findDateSuggestion(
      filterData,
      checkInDateCompare,
      checkOutDateCompare
    );

    console.log(
      "BEFORE : this.props.roomsList.RoomData : ",
      this.props.roomsList.RoomData
    );
    console.log("BEFORE FILTER_DATA : filterData : ", filterData);
    //call set filterRoomData
    localVar = this.returnLocalVarData(
      filterData,
      checkInDateCompare,
      checkOutDateCompare
    );

    console.log(
      "Setting FILTER_DATA : CAlling action from DateContainer : ",
      localVar
    );
    this.props.dispatch(filterRoomData(localVar));
    filterData = [];
    localVar = [];
  }
  handleSearch() {
    // this.props.dispatch(getRoomService());
    // setTimeout(() => this.props.dispatch(getRoomService()), 5000);
    this.props.dispatch(getRoomService());
    console.log("After service roomData :", this.props.roomsList);
    setTimeout(
      () => console.log("Delay After service roomData :", this.props.roomsList),
      25000
    );

    if (this.state.checkInDateFlag && this.state.checkOutDateFlag) {
      if (this.state.checkOutDateValue > this.state.checkInDateValue) {
        this.searchAvailability();
        //   //Set the dates
        this.props.dispatch(
          selectedDate(
            this.state.checkInDateValue,
            this.state.checkOutDateValue
          )
        );
        //   //Call the Action
        this.props.dispatch(setRoomsFlagAction(true));
        console.log(
          "HandleSearch : this.state.checkInDateValue : ",
          this.state.checkInDateValue
        );
        console.log(
          "HandleSearch : this.state.checkOutDateValue : ",
          this.state.checkOutDateValue
        );
        dates =
          "Your search from " +
          this.state.checkInDateValue +
          " to " +
          this.state.checkOutDateValue;
      } else {
        alert("Checkout Date Should Be Greater Than CheckIn Date");
      }
    } else {
      dates = "Please selecte check in and check out dates";
    }
  }

  componentDidMount() {
    console.log("ComponentDidMount");
    // var headers = {
    //   "Access-Control-Allow-Origin": "*",
    //   Accept: "application/json",
    //   "Content-type": "application/json"
    // };
    // // fetch("https://jsonplaceholder.typicode.com/users")
    // //fetch("http://10.119.79.57:8080/reservation/allRoomBookingDetails/?checkInDate=&checkOutDate= ")
    // fetch(
    //   "http://10.119.79.57:8080/reservation/roomsBookingDetail/102/?checkInDate=&checkOutDate=",
    //   headers
    // )
    //   // fetch(
    //   //   "http://clubonlinetest.alithya.fr/WebServices/AppliMobile.asmx/getSurfaceList"
    //   // )
    //   .then(result => result.json())
    //   .then(result => {
    //     result.header("Access-Control-Allow-Origin", "*");
    //     result.header(
    //       "Access-Control-Allow-Headers",
    //       "Origin, X-Requested-With, Content-Type, Accept"
    //     );
    //     this.setState({
    //       results_res: result
    //       // address1: result.address
    //     });
    //     // console.log(address1);
    //     console.log("Pummy--- : ", this.state.results_res);
    //   });
    if (this.props.selectedDateReducer) {
      this.setState({
        checkInDateValue: this.props.selectedDateReducer.checkInDate,
        checkOutDateValue: this.props.selectedDateReducer.checkOutDate,
        checkInDateFlag: true,
        checkOutDateFlag: true
      });
      this.searchAvailability();
    }

    //call Room Service
    // this.props.dispatch(getRoomService);
    // console.log("RoomList Data : ", this.props.roomList);
  }
  render() {
    console.log("DateContainer calling : ", this.props.roomsList.RoomData);
    console.log("CheckIn Date : ", this.state.checkInDateValue);
    console.log("CheckOut Date : ", this.state.checkOutDateValue);
    return (
      <div className="date_search">
        <div className="panel">
          <h3 className="subTitle">
            Please enter check in and check out dates
          </h3>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <label>CheckIn date</label>{" "}
            <ModernDatepicker
              date={this.state.checkInDateValue}
              format={"DD-MM-YYYY"}
              showBorder
              className="cal"
              onChange={date => this.validCheckInDate(date)}
              placeholder={"Select a date"}
            />
          </div>
          <div className="col-sm-6">
            <label>CheckOut date</label>{" "}
            <ModernDatepicker
              date={this.state.checkOutDateValue}
              format={"DD-MM-YYYY"}
              showBorder
              className="cal"
              onChange={date => this.validCheckOutDate(date)}
              placeholder={"Select a date"}
            />
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-12">
            <button
              className="btn btn-md btn-primary"
              type="submit"
              onClick={this.handleSearch}
            >
              Search
            </button>
          </div>
        </div>
        <hr />
        <div>
          <label className="info">{dates}</label>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    roomsList: state.roomsList,
    selectedDateReducer: state.dateReducer
  };
}
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(
//     {
//       setRoomsFlagAction: setRoomsFlagAction,
//       filterRoomData: filterRoomData,
//       setGapArrayValue: setGapArrayValue,
//       selectedDate: selectedDate
//     },
//     dispatch
//   );
// }

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(DateContainer);
