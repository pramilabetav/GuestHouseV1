import React from "react";
// import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import DateContainer from "./DateContainer.js";
import Rooms from "./Rooms.js";
import AddNewBooking from "./AddNewBooking";

class HomePage extends React.Component {
  render() {
    console.log("Kya ho rha he ye flag k sath : ");
    console.log(this.props.showRoomFlag);
    return (
      <div className="container">
        {this.props.showRoomFlag.addRoomFlag ? (
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
