import React from "react";
// import { bindActionCreators } from "redux";
import {
	connect
} from "react-redux";
import DateContainer from "./DateContainer.js";
import Rooms from "./Rooms.js";
import AddNewBooking from "./AddNewBooking";
import SuccessPage from "./SuccessPage";
import ViewEditBookingPage from "./ViewEditBookingPage";
import BookingSuggestions from "./BookingSuggestions";

class HomePage extends React.Component {
	//create a function to return specific component to display
	render() {
		const randomNum = Math.random();
		console.log("HomePage: randomNum : ", randomNum);

		return ( <div className = "container" > 
			{this.props.showRoomFlag.editFlag ? 
				( <ViewEditBookingPage / >) : 
				this.props.showRoomFlag.successFlag ? 
				( <SuccessPage / >) : 
				this.props.showRoomFlag.addRoomFlag ? 
				( <AddNewBooking / >) : 
				this.props.showRoomFlag.roomFlag ? 
				( <div ><DateContainer / ><Rooms / ><BookingSuggestions / ></div>) :
				( <DateContainer / >)
			} 
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