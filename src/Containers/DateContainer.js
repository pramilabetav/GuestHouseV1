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
    let preCO;
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
    localVar = filterData.map((room, i) => {
      room.BookedEmployeeDetails = room.BookedEmployeeDetails.filter(
        (employee, i) => {
          let CI = moment(checkInDateCompare).format("DD-MM-YYYY");
          let CO = moment(checkOutDateCompare).format("DD-MM-YYYY");
          let ECI = moment(employee.CheckInDate).format("DD-MM-YYYY");
          let ECO = moment(employee.CheckOutDate).format("DD-MM-YYYY");
          //1
          console.log("Which EmployeeID : ", employee.EmployeeID);
          if (CI === ECI && CO >= ECO) {
            console.log("ROOMID --------> ", room.RoomID);
            console.log("1.1 : Overlap condition ");
            if (CO > ECO) {
              // gapRoomArray.push({
              //   roomID: room.RoomID,
              //   availFrom: ECO,
              //   availTo: CO
              // });
              flag = true;
              console.log("Is GapArray Added : ", gapRoomArray);
              console.log("----------------------------------------------");
            }
            return employee;
          } else if (CI === ECI && CO < ECO) {
            console.log("ROOMID --------> ", room.RoomID);
            console.log("1.2 : Overlap condition ");
            gapRoomArray.push({
              roomID: room.RoomID,
              availFrom: CO,
              availTo: ECO
            });
            console.log("Is GapArray Added : ", gapRoomArray);
            console.log("----------------------------------------------");
            return employee;
          }
          //2.1
          else if (CI > ECI && CI < ECO && (CO > ECI && CO < ECO)) {
            console.log("ROOMID --------> ", room.RoomID);
            console.log("2.1.1 : CI Open End OR SubSet ");
            gapRoomArray.push({
              roomID: room.RoomID,
              availFrom: CO,
              availTo: ECO
            });
            console.log("Is GapArray Added : ", gapRoomArray);
            console.log("----------------------------------------------");
            return employee;
          } else if (CI < ECI && (CO > ECI && CO < ECO)) {
            console.log("ROOMID --------> ", room.RoomID);
            console.log("2.1.2 : CI Open End OR SubSet ");
            gapRoomArray.push({
              roomID: room.RoomID,
              availFrom: CI,
              availTo: ECI
            });
            gapRoomArray.push({
              roomID: room.RoomID,
              availFrom: CO,
              availTo: ECO
            });
            console.log("Is GapArray Added : ", gapRoomArray);
            console.log("----------------------------------------------");
            return employee;
          }

          //2.2
          else if (CI > ECI && CI < ECO && CO >= ECO) {
            console.log("ROOMID --------> ", room.RoomID);
            console.log("2.2.1 : CO Open End OR SubSet ");
            if (CO > ECO) {
              gapRoomArray.push({
                roomID: room.RoomID,
                availFrom: ECO,
                availTo: CO
              });
            }
            console.log("Is GapArray Added : ", gapRoomArray);
            console.log("----------------------------------------------");
            return employee;
          } else if (CI > ECI && CI < ECO && CO < ECO) {
            console.log("ROOMID --------> ", room.RoomID);
            console.log("2.2.2 : CO Open End OR SubSet ");

            gapRoomArray.push({
              roomID: room.RoomID,
              availFrom: CO,
              availTo: ECO
            });
            console.log("Is GapArray Added : ", gapRoomArray);
            console.log("----------------------------------------------");
            return employee;
          }

          //3
          else if (CI < ECI && CO > ECO) {
            gapRoomArray.push({
              roomID: room.RoomID,
              availFrom: CI,
              availTo: ECI
            });
            gapRoomArray.push({
              roomID: room.RoomID,
              availFrom: ECO,
              availTo: CO
            });
            console.log("ROOMID --------> ", room.RoomID);
            console.log("3 : CI and CO Open End OR SuperSet ");
            return employee;
          }
          //4
          else if (CI <= ECI && CO > ECI && CO <= ECO) {
            console.log("ROOMID --------> ", room.RoomID);
            console.log("4 : CI subset and CO Open End ");
            if (CI < ECI) {
              gapRoomArray.push({
                roomID: room.RoomID,
                availFrom: CI,
                availTo: ECI
              });
            }
            if (CO < ECO) {
              gapRoomArray.push({
                roomID: room.RoomID,
                availFrom: CO,
                availTo: ECO
              });
            }

            console.log("Is GapArray Added : ", gapRoomArray);
            console.log("----------------------------------------------");
            return employee;
          }
          console.log("######################################################");
          if (CO > ECO) {
            gapRoomArray.push({
              roomID: room.RoomID,
              availFrom: ECO,
              availTo: CO
            });
            console.log("Is GapArray Added : ", gapRoomArray);
            console.log("----------------------------------------------");
          }
        }
      );
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
