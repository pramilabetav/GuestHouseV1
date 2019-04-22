import React from "react";
import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
import { setRoomsFlagAction, getAll, getRoomService } from "../Actions";

class BookingSuggestions extends React.Component {
  constructor(props) {
    super(props);
    this.state = { add: [] };
    this.handle_click = this.handle_click.bind(this);
  }
  handle_click() {
    this.props.dispatch(setRoomsFlagAction(true, false, false, false, ""));
  }
  componentDidMount() {
    console.log("Suggestion Component : componentDidMount : ");
    this.props.dispatch(getRoomService());
    console.log("RoomList Data: Booking Suggestion : ", this.props.roomList);
  }
  render() {
    let returnContent;
    let suggestionDateList = null;
    let fromDate, toDate;
    let flag = true;
    let fromToDate = [];
    console.log("gapArrayData", this.props.gapArrayData);
    for (let i = 0; i < this.props.gapArrayData.gapArray.length; i++) {
      // console.log("Room ID ", this.props.gapArrayData.gapArray[i].RoomID);
      // console.log("i:", i);
      for (let j = 0; j < this.props.gapArrayData.gapArray[i].gap.length; j++) {
        // console.log("j--:", j);
        fromDate = this.props.gapArrayData.gapArray[i].gap[j].date;
        for (
          let k = j + 1;
          k < this.props.gapArrayData.gapArray[i].gap.length;
          k++
        ) {
          // console.log("k---:", k);
          if (this.props.gapArrayData.gapArray[i].gap[j].occupany === 0) {
            if (this.props.gapArrayData.gapArray[i].gap[k].occupany === 2) {
              toDate = this.props.gapArrayData.gapArray[i].gap[k].date;
              fromToDate.push({
                RoomID: this.props.gapArrayData.gapArray[i].RoomID,
                fromDate: fromDate,
                toDate: toDate
              });
              break;
            } else if (
              this.props.gapArrayData.gapArray[i].gap[j].occupany ===
              this.props.gapArrayData.gapArray[i].gap[k].occupany
            ) {
              toDate = this.props.gapArrayData.gapArray[i].gap[k].date;
              fromToDate.push({
                RoomID: this.props.gapArrayData.gapArray[i].RoomID,
                fromDate: fromDate,
                toDate: toDate
              });
            } else {
              if (this.props.gapArrayData.gapArray[i].gap[k].occupany === 1) {
                toDate = this.props.gapArrayData.gapArray[i].gap[k].date;
                fromToDate.push({
                  RoomID: this.props.gapArrayData.gapArray[i].RoomID,
                  fromDate: fromDate,
                  toDate: toDate
                });
              }
            }
          } else if (
            this.props.gapArrayData.gapArray[i].gap[j].occupany === 1
          ) {
            if (this.props.gapArrayData.gapArray[i].gap[k].occupany === 2) {
              toDate = this.props.gapArrayData.gapArray[i].gap[k].date;
              fromToDate.push({
                RoomID: this.props.gapArrayData.gapArray[i].RoomID,
                fromDate: fromDate,
                toDate: toDate
              });
              break;
            } else if (
              this.props.gapArrayData.gapArray[i].gap[j].occupany ===
              this.props.gapArrayData.gapArray[i].gap[k].occupany
            ) {
              toDate = this.props.gapArrayData.gapArray[i].gap[k].date;
              fromToDate.push({
                RoomID: this.props.gapArrayData.gapArray[i].RoomID,
                fromDate: fromDate,
                toDate: toDate
              });
            } else {
              if (this.props.gapArrayData.gapArray[i].gap[k].occupany === 0) {
                toDate = this.props.gapArrayData.gapArray[i].gap[k].date;
                fromToDate.push({
                  RoomID: this.props.gapArrayData.gapArray[i].RoomID,
                  fromDate: fromDate,
                  toDate: toDate
                });
              }
            }
          }
        }
      }
    }
    console.log("From TO Date : ", fromToDate);
    let roomID;
    let roomDetails;
    let roomFlag = true;
    returnContent = this.props.gapArrayData.gapArray.map((gapRoom, i) => {
      roomFlag = true;
      if (gapRoom.gap.length > 0) {
        suggestionDateList = fromToDate.map((gap, j) => {
          if (gap.RoomID === gapRoom.RoomID) {
            let roomHTML = "";
            if (roomFlag) {
              roomHTML = <label>{gap.RoomID}</label>;
              roomFlag = false;
            }
            return (
              <div className="suggestionPanel" key={j}>
                {roomHTML}
                <ul>
                  <li>
                    {gap.fromDate} to {gap.toDate}
                  </li>
                </ul>
              </div>
            );
          }
        });
        return <div key={i}>{suggestionDateList}</div>;
      }
    });
    return <div className="suggestions">{returnContent}</div>;
  }
}

function mapStateToProps(state) {
  return {
    gapArrayData: state.gapArrayData,
    roomList: state.roomList
  };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(
//     { setRoomsFlagAction: setRoomsFlagAction },
//     dispatch
//   );
// }

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(BookingSuggestions);
