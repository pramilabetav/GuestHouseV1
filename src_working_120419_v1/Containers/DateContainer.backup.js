import React from "react";
// import { bindActionCreators } from "redux";
import moment from "moment";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  setRoomsFlagAction,
  filterRoomData,
  selectedDate,
  setGapArrayValue
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
      checkOutDateFlag: false
    };
    this.validCheckInDate = this.validCheckInDate.bind(this);
    this.validCheckOutDate = this.validCheckOutDate.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.searchAvailability = this.searchAvailability.bind(this);
  }

  validCheckInDate(date) {
    this.setState({
      checkInDateValue: date,
      checkInDateFlag: true
    });
  }
  validCheckOutDate(date) {
    this.setState({
      checkOutDateValue: date,
      checkOutDateFlag: true
    });
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
    console.log(
      "BEFORE : this.props.roomsList.RoomData : ",
      this.props.roomsList.RoomData
    );
    console.log("BEFORE FILTER_DATA : filterData : ", filterData);
    let CI = moment(checkInDateCompare).format("DD-MM-YYYY");
    let CO = moment(checkOutDateCompare).format("DD-MM-YYYY");
    // var timeDiff = Math.abs(
    //   checkOutDateCompare.getTime() - checkInDateCompare.getTime()
    // );
    // var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    var startDate = moment(checkInDateCompare, "DD-MM-YYYY");
    var endDate = moment(checkOutDateCompare, "DD-MM-YYYY");

    var result = endDate.diff(startDate, "days");
    // alert(result);
    // console.log("Difference : ", CO.diff(CI, "days"));
    // var startdate1 = CI;
    // var startdate;
    // var new_date = moment(startdate, "DD-MM-YYYY");
    var new_date1 = moment(checkInDateCompare, "DD-MM-YYYY");
    var new_date2 = moment(checkInDateCompare, "DD-MM-YYYY");
    let gapObj = [];

    localVar = filterData.map((room, i) => {
      let empLen = room.BookedEmployeeDetails.length;
      let changedDate = moment(new_date1._d).format("MM-DD-YYYY");
      console.log("For RoomID --------> ", room.RoomID);
      console.log("Date diff --------> ", result);
      room.BookedEmployeeDetails = room.BookedEmployeeDetails.filter(
        (employee, i) => {
          console.log("map Counter --------> ", i);
          //1. EmployeeRange
          //2. if length == bookeddetails
          // For i=incrementDate (3-7) and j=EmployeeRange(5)
          debugger;
          empBookings.push({
            employeeID: employee.EmployeeID,
            employeeCI: employee.CheckInDate,
            employeeCO: employee.CheckOutDate
          });
          console.log("empBookings----->", empBookings);
          debugger;
          if (i === room.BookedEmployeeDetails.length - 1) {
            for (let x = 0; x < result; x++) {
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
              gapObj.push({ [internalDate]: occupiedCounter });
              // gapObj.assign();
              // new_date2.add(1, "days");
              occupiedCounter = 0;
              console.log(
                "####END EMPLOYEE LOOP ########################",
                gapObj
              );
              new_date2.add(1, "days");
              console.log("---------------");
            }
          }
          // empBookings = [];
          // let ECI = moment(employee.CheckInDate).format("DD-MM-YYYY");
          // let ECO = moment(emgployee.CheckOutDate).format("DD-MM-YYYY");
          // let internalDate = moment(new_date2._d).format("MM-DD-YYYY");

          // console.log("internalDate : ", internalDate);
          // console.log("ECI Value    : ", ECI);
          // console.log("ECO Value    : ", ECO);
          // console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@");
          // Check for Single Eimployee booking
          // Check CurrCI for all Booked Employee range
          // if (internalDate >= ECI && internalDate < ECO) {
          //   ++occupiedCounter;
          //   console.log(
          //     "If condition : occupiedCounter Value : ",
          //     occupiedCounter
          //   );
          //   gapObj.push({ [internalDate]: occupiedCounter });
          //   // gapObj.assign();
          //   // new_date2.add(1, "days");
          //   console.log(
          //     "####END EMPLOYEE LOOP ########################",
          //     gapObj
          //   );
          //   return employee;
          // }
          // new_date2.add(1, "days");
          // if (empLen === i) {
          //   new_date1.add(1, "days");
          //   if (new_date1 !== CO) {
          //     i = 0;
          //   } else {
          //     return;
          //   }
          // }
          return employee;
        }
      );
      new_date2 = moment(checkInDateCompare, "DD-MM-YYYY");
      empBookings = [];
      // new_date2.add(1, "days");
      // new_date1.add(1, "days");
      gapRoomArray.push({
        RoomID: room.RoomID,
        gap: gapObj
      });
      gapObj = [];
      console.log("$$$$$END OF ROOM LOOP $$$ , GapRoomArray : ", gapRoomArray);
      return room;
    });
    console.log(
      "Setting FILTER_DATA : CAlling action from DateContainer : ",
      localVar
    );
    console.log("DateContainer : gapRoomArray : ", gapRoomArray);
    //Create new reducer for GapArray
    this.props.setGapArrayValue(gapRoomArray);
    this.props.filterRoomData(localVar);
    filterData = [];
    localVar = [];
    gapRoomArray = [];
  }
  handleSearch() {
    if (this.state.checkInDateFlag && this.state.checkOutDateFlag) {
      if (this.state.checkOutDateValue > this.state.checkInDateValue) {
        this.searchAvailability();
        //   //Set the dates
        this.props.selectedDate(
          this.state.checkInDateValue,
          this.state.checkOutDateValue
        );
        //   //Call the Action
        this.props.setRoomsFlagAction(true);
        dates =
          "Your search from " +
          moment(this.state.checkInDateValue).format("DD-MMM-YYYY") +
          " to " +
          moment(this.state.checkOutDateValue).format("DD-MMM-YYYY");
      } else {
        alert("Checkout Date Should Be Greater Than CheckIn Date");
      }
    } else {
      dates = "Please selecte check in and check out dates";
    }
  }

  componentDidMount() {
    if (this.props.selectedDateReducer) {
      this.setState({
        checkInDateValue: this.props.selectedDateReducer.checkInDate,
        checkOutDateValue: this.props.selectedDateReducer.checkOutDate,
        checkInDateFlag: true,
        checkOutDateFlag: true
      });
      this.searchAvailability();
    }
  }
  render() {
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
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setRoomsFlagAction: setRoomsFlagAction,
      filterRoomData: filterRoomData,
      setGapArrayValue: setGapArrayValue,
      selectedDate: selectedDate
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DateContainer);

//1

// if (CI === ECI && CO >= ECO) {
//   console.log("1.1 : Overlap condition ");
//   if (CO > ECO) {
//     // gapRoomArray.push({
//     //   roomID: room.RoomID,
//     //   availFrom: ECO,
//     //   availTo: CO
//     // });
//     console.log("Is GapArray Added : ", gapRoomArray);
//     console.log("----------------------------------------------");
//   }
//   return employee;
// } else if (CI === ECI && CO < ECO) {
//   console.log("ROOMID --------> ", room.RoomID);
//   console.log("1.2 : Overlap condition ");
//   gapRoomArray.push({
//     roomID: room.RoomID,
//     availFrom: CO,
//     availTo: ECO
//   });
//   console.log("Is GapArray Added : ", gapRoomArray);
//   console.log("----------------------------------------------");
//   return employee;
// }
// //2.1
// else if (CI > ECI && CI < ECO && (CO > ECI && CO < ECO)) {
//   console.log("ROOMID --------> ", room.RoomID);
//   console.log("2.1.1 : CI Open End OR SubSet ");
//   gapRoomArray.push({
//     roomID: room.RoomID,
//     availFrom: CO,
//     availTo: ECO
//   });
//   console.log("Is GapArray Added : ", gapRoomArray);
//   console.log("----------------------------------------------");
//   return employee;
// } else if (CI < ECI && (CO > ECI && CO < ECO)) {
//   console.log("ROOMID --------> ", room.RoomID);
//   console.log("2.1.2 : CI Open End OR SubSet ");
//   gapRoomArray.push({
//     roomID: room.RoomID,
//     availFrom: CI,
//     availTo: ECI
//   });
//   gapRoomArray.push({
//     roomID: room.RoomID,
//     availFrom: CO,
//     availTo: ECO
//   });
//   console.log("Is GapArray Added : ", gapRoomArray);
//   console.log("----------------------------------------------");
//   return employee;
// }

// //2.2
// else if (CI > ECI && CI < ECO && CO >= ECO) {
//   console.log("ROOMID --------> ", room.RoomID);
//   console.log("2.2.1 : CO Open End OR SubSet ");
//   if (CO > ECO) {
//     gapRoomArray.push({
//       roomID: room.RoomID,
//       availFrom: ECO,
//       availTo: CO
//     });
//   }
//   console.log("Is GapArray Added : ", gapRoomArray);
//   console.log("----------------------------------------------");
//   return employee;
// } else if (CI > ECI && CI < ECO && CO < ECO) {
//   console.log("ROOMID --------> ", room.RoomID);
//   console.log("2.2.2 : CO Open End OR SubSet ");

//   gapRoomArray.push({
//     roomID: room.RoomID,
//     availFrom: CO,
//     availTo: ECO
//   });
//   console.log("Is GapArray Added : ", gapRoomArray);
//   console.log("----------------------------------------------");
//   return employee;
// }

// //3
// else if (CI < ECI && CO > ECO) {
//   gapRoomArray.push({
//     roomID: room.RoomID,
//     availFrom: CI,
//     availTo: ECI
//   });
//   gapRoomArray.push({
//     roomID: room.RoomID,
//     availFrom: ECO,
//     availTo: CO
//   });
//   console.log("ROOMID --------> ", room.RoomID);
//   console.log("3 : CI and CO Open End OR SuperSet ");
//   return employee;
// }
// //4
// else if (CI <= ECI && CO > ECI && CO <= ECO) {
//   console.log("ROOMID --------> ", room.RoomID);
//   console.log("4 : CI subset and CO Open End ");
//   if (CI < ECI) {
//     gapRoomArray.push({
//       roomID: room.RoomID,
//       availFrom: CI,
//       availTo: ECI
//     });
//   }
//   if (CO < ECO) {
//     gapRoomArray.push({
//       roomID: room.RoomID,
//       availFrom: CO,
//       availTo: ECO
//     });
//   }

//   console.log("Is GapArray Added : ", gapRoomArray);
//   console.log("----------------------------------------------");
//   return employee;
// }
