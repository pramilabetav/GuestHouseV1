import React from "react";
import { connect } from "react-redux";

class ErrorContainer extends React.Component {
  render() {
    console.log("ErrorContainer : errorData : ", this.props.errorData);
    return (
      <div className="error">
        <label className="errorInfo">{this.props.errorData.error}</label>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    errorData: state.errorData
  };
}

export default connect(mapStateToProps)(ErrorContainer);
