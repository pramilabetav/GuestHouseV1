import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <img
          className="logo"
          src="https://uploads.codesandbox.io/uploads/user/6444487a-0c5d-4d9e-9810-7b77e5217f18/DURD-House-Icon-Small.jpg"
          alt="logo"
        />
        <h3 className="HeaderTitle">Guest House Reservation Management</h3>
      </div>
    );
  }
}

export default Header;
