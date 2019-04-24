import React from "react";
// import { bindActionCreators } from "redux";
import moment from "moment";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setRoomsFlagAction, filterRoomData, selectedDate,setGapArrayData } from "../Actions";
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
    let sendGapArray =[];
    let checkInDateCompare;
    let checkOutDateCompare;
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
            return employee;
          } else if (CI === ECI && CO < ECO) {
            console.log("ROOMID --------> ", room.RoomID);
            console.log("1.2 : Overlap condition ");
            sendGapArray.concat({
              "availFrom" : CO,
              "availTo":ECO
            })
            return employee;
          }

          //2.1
          else if (
            CI > ECI && CI < ECO &&
            CO > ECI && CO < ECO
          ) {
            console.log("ROOMID --------> ", room.RoomID);
            console.log("2.1.1 : CI Open End OR SubSet ");
            //gap from CI to ECI
            sendGapArray.concat({
              "availFrom" : CI,
              "availTo":ECI
            })
            return employee;
          } 
          else if (CI < ECI &&
          (CO > ECI && CO < ECO)
       ) {
        console.log("ROOMID --------> ", room.RoomID);
        console.log("2.1.2 : CI Open End OR SubSet ");
        //Gap from CO to ECO
        sendGapArray.concat({
          "availFrom" : CO,
          "availTo":ECO
        })
        return employee;

          }
          //2.2
          else if (CI > ECI && CI < ECO && CO >= ECO) {
            console.log("ROOMID --------> ", room.RoomID);
            console.log("2.2.1 : CO Open End OR SubSet ");
            //Gap from CI to ECI
          sendGapArray.concat({
            "availFrom" : CI,
            "availTo":ECI
          })
            return employee;
          } 
          else if (CI > ECI && CI < ECO && CO < ECO) {
            console.log("ROOMID --------> ", room.RoomID);
            console.log("2.2.2 : CO Open End OR SubSet ");
            //Gap from CO to ECO
          sendGapArray.concat({
            "availFrom" : CO,
            "availTo":ECO
          })
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
    console.log(
      "Setting FILTER_DATA : CAlling action from DateContainer : ",
      localVar, "  sendGapArray : ", sendGapArray
    );
    //Send GapArrayData to Reducer
    this.props.setGapArrayData(sendGapArray);
    this.props.filterRoomData(localVar);
    filterData = [];
    localVar = [];
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
    console.log("ComponentDidMount");
    var headers= {
      'crossDomain':true,
      'mode': 'no-cors',
      'Access-Control-Allow-Origin': '*',
      'Accept': 'application/json',
      'Content-type': 'application/json'
      
  };
      // fetch("https://jsonplaceholder.typicode.com/users")
      //fetch("http://10.119.79.57:8080/reservation/allRoomBookingDetails/?checkInDate=&checkOutDate= ")
    fetch(
      "http://10.119.79.57:8080/reservation/roomsBookingDetail/102/?checkInDate=&checkOutDate="
    )
      // fetch(
      //   "http://clubonlinetest.alithya.fr/WebServices/AppliMobile.asmx/getSurfaceList"
      // )
      .then(result => result.json())
      .then(result => {
        // result.header('Access-Control-Allow-Origin', '*');
        // result.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        this.setState({
          results_res: result
          // address1: result.address
        });
        // console.log(address1);
        console.log("2--- : ", this.state.results_res);
      }).then(error=>{
        console.log("Error while hitting service");
      });
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
      setGapArrayData:setGapArrayData,
      selectedDate: selectedDate
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DateContainer);
