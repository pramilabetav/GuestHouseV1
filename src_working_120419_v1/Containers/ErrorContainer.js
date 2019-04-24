import React from "react";
import { connect } from "react-redux";

class ErrorContainer extends React.Component {
  render() {
    let errorString = "";
    errorString = this.props.errorData +"";
    console.log("ErrorContainer : errorData : ",this.props.errorData, " STRIGIFY : ",  JSON.stringify(this.props.errorData), " typeOF : " , typeof this.props.errorData);
    if(errorString.includes("Network")) {
      console.log("IF block : NETWORK ERROR");
    }
    return (
      <div className="error">
        <label className="errorInfo">{errorString}</label>
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
