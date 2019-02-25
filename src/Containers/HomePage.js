import React from "react";
// import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import DateContainer from "./DateContainer.js";
import Rooms from "./Rooms.js";
import AddNewBooking from "./AddNewBooking";
import SuccessPage from "./SuccessPage";
import ViewEditBookingPage from "./ViewEditBookingPage";

class HomePage extends React.Component {
  //create a function to return specific component to display
  render() {
    console.log("Kya ho rha he ye flag k sath : ");
    console.log(this.props.showRoomFlag);
    console.log("--------------------------------------------------");
    // <ViewEditBookingPage />
    return (
      <div className="container">
        {this.props.showRoomFlag.editFlag ? (
          <ViewEditBookingPage />
        ) : this.props.showRoomFlag.successFlag ? (
          <SuccessPage />
        ) : this.props.showRoomFlag.addRoomFlag ? (
          <AddNewBooking />
        ) : this.props.showRoomFlag.roomFlag ? (
          <Rooms />
        ) : (
          <DateContainer />
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    showRoomFlag: state.showRoomFlag
  };
}

export default connect(mapStateToProps)(HomePage);
