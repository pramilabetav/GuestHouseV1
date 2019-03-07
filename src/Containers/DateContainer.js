import React from "react";
// import { bindActionCreators } from "redux";
import moment from "moment";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { showRoomsContainer, filterRoomData, selectedDate } from "../Actions";
let dates;
class DateContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkInDateValue: "",
      checkOutDateValue: "",
      checkInDateFlag: false,
      checkOutDateFlag: false
    };
    this.validCheckInDate = this.validCheckInDate.bind(this);
    this.validCheckOutDate = this.validCheckOutDate.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  validCheckInDate(e) {
    console.log("validCheckInDate --> ", e.target.value);
    this.setState({
      checkInDateValue: e.target.value,
      checkInDateFlag: true
    });
  }
  validCheckOutDate(e) {
    this.setState({
      checkOutDateValue: e.target.value,
      checkOutDateFlag: true
    });
  }
  handleSearch(e) {
    console.log("Calling handleSearch", e);
    console.log(
      "VAlues of checkindate and checkout date : ",
      this.state.checkInDateFlag,
      this.state.checkOutDateFlag
    );
    if (this.state.checkInDateFlag && this.state.checkOutDateFlag) {
      console.log("INSIDE IF");
      //Set the dates
      this.props.selectedDate(
        this.state.checkInDateValue,
        this.state.checkOutDateValue
      );
      //Call the Action
      this.props.showRoomsContainer(
        this.state.checkInDateValue,
        this.state.checkOutDateValue,
        true
      );
      //call action to store filter RoomData
      this.props.filterRoomData(
        moment(this.state.checkInDateValue).format("YYYY-MM-DD"),
        moment(this.state.checkOutDateValue).format("YYYY-MM-DD")
      );
      dates =
        "Your search from " +
        this.state.checkInDateValue +
        " to " +
        this.state.checkOutDateValue;
      // console.log("Message : " + dates);
      console.log("END of IF");
    } else {
      dates = "Please selecte check in and check out dates";
      // console.log("Message : " + dates);
    }
  }
  componentDidMount() {
    console.log(
      "DateContainer : VALUE of selectedDate :  ",
      this.props.selectedDateReducer
    );
    if (this.props.selectedDateReducer) {
      this.setState({
        checkInDateValue: moment(
          this.props.selectedDateReducer.checkInDate
        ).format("YYYY-MM-DD"),
        checkOutDateValue: moment(
          this.props.selectedDateReducer.checkOutDate
        ).format("YYYY-MM-DD"),
        checkInDateFlag: true,
        checkOutDateFlag: true
      });
    }
  }
  render() {
    return (
      <div className="date_search">
        <div className="panel">
          <h3 className="pageTitle">
            Please enter check in and check out dates
          </h3>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <label>CheckIn date</label>{" "}
            <input
              className="form-control"
              type="date"
              name="checkIn"
              id="checkIn"
              value={this.state.checkInDateValue}
              onChange={e => this.validCheckInDate(e)}
            />
          </div>
          <div className="col-sm-6">
            <label>CheckOut date</label>{" "}
            <input
              className="form-control"
              type="date"
              name="checkOut"
              id="checkOut"
              value={this.state.checkOutDateValue}
              onChange={e => this.validCheckOutDate(e)}
            />
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-12">
            <button
              className="btn btn-md btn-primary"
              type="submit"
              onClick={e => this.handleSearch(e)}
            >
              Search
            </button>
          </div>
        </div>
        <hr />
        <div>
          <label className="pageTitle">{dates}</label>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    selectedDateReducer: state.dateReducer
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      showRoomsContainer: showRoomsContainer,
      filterRoomData: filterRoomData,
      selectedDate: selectedDate
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DateContainer);
