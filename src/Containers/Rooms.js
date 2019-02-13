import React from "react";
import EditBooking from "./EditBooking.js";

class Rooms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  callEditBookingPage() {
    return <EditBooking />;
  }
  render() {
    return (
      <div>
        <a href="AddEditBooking.html">
          <lable>Room 1</lable>
        </a>
        <label onClick={() => this.callEditBookingPage()}>Update</label>
      </div>
    );
  }
}

export default Rooms;
