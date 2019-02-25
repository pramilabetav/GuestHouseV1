import React from "react";

class EditBooking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // console.log("Calling EditBooking Component");
    return (
      <div>
        <h2>
          <label>Employee Name</label>
        </h2>
        <h2>Room No.</h2>
        <label>
          <a href="AddEditBooking.html">Edit </a>
        </label>
        <button
          type="submit"
          onclick="alert('Sure Want to Cancel the Cooking')"
        >
          <label> Cancel</label>
        </button>
      </div>
    );
  }
}

export default EditBooking;
