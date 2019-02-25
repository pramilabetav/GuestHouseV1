import React from "react";
// import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { showRoomsContainer } from "../Actions";
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
    // console.log("checkInDateValue : ");
    // console.log(e.target.value);
    // if (
    //   e.target.value === null ||
    //   e.target.value === "" ||
    //   !Date.parse(e.target.value)
    // ) {
    //   alert("Please select Dates");
    // } else {
    this.setState({
      checkInDateValue: e.target.value,
      checkInDateFlag: true
    });
    //}
  }
  validCheckOutDate(e) {
    // console.log("checkOutDateValue : ");
    // console.log(e.target.value);
    // if (
    //   e.target.value === null ||
    //   e.target.value === "" ||
    //   !Date.parse(e.target.value)
    // ) {
    //   alert("Please select Dates");
    // } else {
    this.setState({
      checkOutDateValue: e.target.value,
      checkOutDateFlag: true
    });
    //}
  }
  handleSearch(e) {
    // console.log(
    //   "What are the values of checkInDateFlag : " +
    //     this.state.checkInDateFlag +
    //     "  checkOutDateFlag : " +
    //     this.state.checkOutDateFlag
    // );
    if (this.state.checkInDateFlag && this.state.checkOutDateFlag) {
      //Call the Action
      this.props.showRoomsContainer(
        this.state.checkInDateValue,
        this.state.checkOutDateValue,
        true
      );
      dates =
        "Your search from " +
        this.state.checkInDateValue +
        " to " +
        this.state.checkOutDateValue;
      // console.log("Message : " + dates);
    } else {
      dates = "Please selecte check in and check out dates";
      // console.log("Message : " + dates);
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { showRoomsContainer: showRoomsContainer },
    dispatch
  );
}

export default connect(
  null,
  mapDispatchToProps
)(DateContainer);
