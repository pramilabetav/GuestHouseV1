import React from "react";
import {
	connect
} from "react-redux";
import moment from "moment";
import {
	bindActionCreators
} from "redux";
// import { selectedRoomDetails } from "../Actions";
import {
	setRoomsFlagAction,
	resetRoomDataValue,
	selectedRoomDetails,
	setGapArrayValue
} from "../Actions";
import ErrorContainer from "./ErrorContainer";

class Rooms extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			// roomDataCopy: [],
			fakeGapArray: [],
			initialFilterState: []
		};
		this.goToHomePage = this.goToHomePage.bind(this);
		this.callAddNewBooking = this.callAddNewBooking.bind(this);
		this.callViewEditPage = this.callViewEditPage.bind(this);
	}
	callAddNewBooking(room) {
		this.props.dispatch(setRoomsFlagAction(false, true));
		this.props.dispatch(selectedRoomDetails(room));
	}
	callViewEditPage(room) {
		// console.log("Room : CallViewEditPage Function : room : ", room);
		this.props.dispatch(
			setRoomsFlagAction(false, false, true, false, "UPDATE")
		);
		this.props.dispatch(selectedRoomDetails(room));
	}
	goToHomePage() {
		this.props.dispatch(setRoomsFlagAction(false, false));
		// this.props.resetRoomDataValue();
	}
	findDateSuggestion(filterData, checkInDateCompare, checkOutDateCompare) {
		let gapRoomArray = [];
		let empBookings = [];
		let occupiedCounter = 0;

		// let CI = moment(checkInDateCompare).format("DD-MM-YYYY");
		// let CO = moment(checkOutDateCompare).format("DD-MM-YYYY");
		var startDate = moment(checkInDateCompare, "DD-MM-YYYY");
		var endDate = moment(checkOutDateCompare, "DD-MM-YYYY");
		var daysDiff = endDate.diff(startDate, "days");
		var new_date2 = moment(checkInDateCompare, "DD-MM-YYYY");
		let gapObj = [];

		let localVar = filterData.map((room, i) => {
			let empLen = room.BookedEmployeeDetails.length;
			console.log("For RoomID --------> ", room.RoomID);
			console.log("Date diff --------> ", daysDiff);
			room.BookedEmployeeDetails = room.BookedEmployeeDetails.filter(
				(employee, i) => {
					// console.log("map Counter --------> ", i);
					//1. EmployeeRange
					//2. if length == bookeddetails
					// For i=incrementDate (3-7) and j=EmployeeRange(5)
					// debugger;
					empBookings.push({
						employeeID: employee.EmployeeID,
						employeeCI: employee.CheckInDate,
						employeeCO: employee.CheckOutDate
					});
					console.log("empBookings----->", empBookings);
					// debugger;
					if (i === room.BookedEmployeeDetails.length - 1) {
						for (let x = 0; x < daysDiff; x++) {
							let internalDate = moment(new_date2._d).format("DD-MM-YYYY");
							console.log("internalDate  : ", internalDate);
							console.log("FOR X value : ", x);
							for (let y = 0; y < empBookings.length; y++) {
								console.log("FOR Y value : ", y);
								console.log(
									"Employee Range : ",
									empBookings[y].employeeCI,
									" to ",
									empBookings[y].employeeCO
								);
								if (
									internalDate >= empBookings[y].employeeCI &&
									internalDate < empBookings[y].employeeCO
								) {
									++occupiedCounter;
									console.log(
										"If condition : occupiedCounter Value : ",
										occupiedCounter
									);
								}
							}
							// gapObj.push({ [internalDate]: occupiedCounter });
							gapObj.push({
								// date_occupancy: internalDate + "$" + occupiedCounter
								date: internalDate,
								occupany: occupiedCounter
							});
							occupiedCounter = 0;
							// console.log(
							//   "####END EMPLOYEE LOOP ########################",
							//   gapObj
							// );
							new_date2.add(1, "days");
							// console.log("---------------");
						}
					}
					return employee;
				}
			);
			new_date2 = moment(checkInDateCompare, "DD-MM-YYYY");
			empBookings = [];
			gapRoomArray.push({
				RoomID: room.RoomID,
				gap: gapObj
			});
			gapObj = [];
			// console.log("$$$$$END OF ROOM LOOP $$$ , GapRoomArray : ", gapRoomArray);
			return room;
		});
		console.log("ROOM COMPONENT : findDateSuggestion : gapRoomArray : ", gapRoomArray);
		// this.setState({
		//   fakeGapArray : gapRoomArray
		// })
		// console.log("DateContainer : gapRoomArray : ", gapRoomArray);
		//Create new reducer for GapArray
		// this.props.dispatch(setGapArrayValue(gapRoomArray));
		gapRoomArray = [];
	}
	// componentDidMount() {
	// console.log("PRINTING from Room Component : COMPONENTDIDMOUNT : ", this.props.roomsList.RoomData);
	// this.findDateSuggestion(this.props.roomsList.RoomData, this.props.selectedDates.checkInDate, this.props.selectedDates.checkOutDate);


	// }
	componentWillReceiveProps(nextProps) {
		console.log("ROOM COMPONENT : componentWillReceiveProps : this.props.status : ", this.props.status);
		console.log("ROOM COMPONENT : componentWillReceiveProps : nextProps.status : ", nextProps.status);
		console.log("ROOM COMPONENT : componentWillReceiveProps : RoomData : ", this.props.roomsList.RoomData);
	}
	shouldComponentUpdate(nextProps, nextState) {
		// this.props.dispatch(setGapArrayValue(gapRoomArray));
		// this.findDateSuggestion(this.props.roomsList.RoomData, this.props.selectedDates.checkInDate, this.props.selectedDates.checkOutDate);
		console.log("ROOM COMPONENT : shouldComponentUpdate : this.props.status : ", this.props.status);
		console.log("ROOM COMPONENT : shouldComponentUpdate : nextProps.status : ", nextProps.status);
		console.log("ROOM COMPONENT : shouldComponentUpdate : RoomData : ", this.props.roomsList.RoomData);
		let status = this.props.status !== nextProps.status;
		return true;
	}
	componentWillUpdate() {
		console.log("ROOM COMPONENT : componentWillUpdate : RoomData : ", this.props.roomsList.RoomData);
	}
	componentDidMount() {
		console.log("ROOM COMPONENT : componentDidMount : RoomData : ", this.props.roomsList.RoomData);
		// this.findDateSuggestion(this.props.roomsList.RoomData, this.props.selectedDates.checkInDate, this.props.selectedDates.checkOutDate);
	}
	render() {
		console.log("ROOM COMPONENT : RoomData : ", this.props.roomsList.RoomData);
		console.log("Yoohhh : Error From Room CONTAINER : this.props.errorData => ", this.props.errorData);
		// if (this.state.loading) {
		//   console.log("Printing error : ", this.props.roomList.RoomData);
		// }
		// Object.keys(this.props.gapArrayData.gapArray).forEach(function(key) {
		//   var value = key;
		//   console.log("Key : " + key + ":" + value);
		// });

		let localFilterRoomData = [];
		let selectClass;
		let titleData;
		let gapArrayLen = 0;
		var returnRoomDisplayData = "";

		if (this.props.errorData) {
			returnRoomDisplayData = < ErrorContainer / > ;
		} else if (this.props.roomsList.RoomData.length === 0) {
			console.log("ROOM COMPONENT : ELSE IF : Loading : ", this.props.roomsList.RoomData);
			// returnRoomDisplayData = <img src = 'img/Loader.gif'></img>
			returnRoomDisplayData = < label className = "loaderInfo" > Data is loading... < /label>;
		} else {
			console.log("ROOM COMPONENT : ELSE : RoomData present : ", this.props.roomsList.RoomData);
			console.log("ROOM COMPONENT : ELSE : GapArrayData present :", this.props.gapArrayData);
			localFilterRoomData = this.props.roomsList.RoomData;
			console.log("ROOM COMPONENT : ELSE : localFilterRoomData present :", localFilterRoomData);
			// this.findDateSuggestion(this.props.roomsList.RoomData, this.props.selectedDates.checkInDate, this.props.selectedDates.checkOutDate);

			// console.log( "Inside if RoomComponnet : this.props.gapArrayData : ", this.props.gapArrayData);
			returnRoomDisplayData = localFilterRoomData.map((room, i) => {
				if (room.BookedEmployeeDetails.length === 0) {
					// console.log("2");
					console.log("IF condition for countTwos room.RoomID : ", room.RoomID);
					selectClass = "roomDetails room-vacant";
					titleData = "Add A New Room";
				} else {
					let countTwos = 0;
					console.log("Else condition for countTwos room.RoomID : ", room.RoomID);
					this.props.gapArrayData.gapArray.map((gapRoom, i) => {
						console.log("ROOM COMPONENT : gapRoomArray map gapRoom: ", gapRoom);
						if (gapRoom.RoomID === room.RoomID) {
							gapArrayLen = gapRoom.gap.length;
							gapRoom.gap.map((gap, i) => {
								if (gap.occupany === 2) {
									console.log("GapArrayData map : if gap.occupany === 2 ", gap.occupany);
									console.log("Counter value : countTwos : ", countTwos);
									countTwos++;
								}
							});
							console.log("Counttows", countTwos, "vs gapArrayLen => ", gapArrayLen);
							if (countTwos !== 0 && gapArrayLen !== 0 && countTwos === gapArrayLen) {
								selectClass = "roomDetails room-booked";
								titleData = "Booking is Full";
							} else {
								selectClass = "roomDetails room-partialbooked";
								titleData = "Add A New Room";
							}
						}
					});
				}
				return ( <
					div className = "room"
					key = {
						i
					} >
					<
					div className = {
						selectClass
					}
					onClick = {
						() => this.callAddNewBooking(room)
					}
					title = {
						titleData
					} >
					<
					label className = "roomLabel" > Room Number < /label> <
					label className = "roomNumber" > {
						room.RoomID
					} < /label> < /
					div > <
					div className = "buttonHolder"
					title = "Edit Your Bookings" >
					<
					a href = "#"
					onClick = {
						() => this.callViewEditPage(room)
					}
					className = "roomEdit" >
					EDIT <
					/a> < /
					div > <
					/div>
				);
			});
		}

		// if (this.props.filterRoomData.filterData.length === 0) {
		//   //check for empty object string
		//   //erroComponent show
		//   if (this.props.errorData) {
		//     returnRoomDisplayData = <ErrorContainer />;
		//   } else {
		//     returnRoomDisplayData = "Hello data is loading";
		//   }
		// } else {
		//   if (this.props.filterRoomData) {
		//     localFilterRoomData = this.props.filterRoomData.filterData;
		//   }

		//   returnRoomDisplayData = localFilterRoomData.map((room, i) => {
		//     if (room.BookedEmployeeDetails.length === 0) {
		//       console.log("2");
		//       selectClass = "roomDetails room-vacant";
		//       titleData = "Add A New Room";
		//     } else {
		//       let countTwos = 0;
		//       this.props.gapArrayData.gapArray.map((gapRoom, i) => {
		//         if (gapRoom.RoomID === room.RoomID) {
		//           gapArrayLen = gapRoom.gap.length;
		//           gapRoom.gap.map((gap, i) => {
		//             if (gap.occupany === 2) {
		//               console.log("INSIDE IF LOOP ");
		//               countTwos++;
		//             }
		//           });
		//           if (countTwos === gapArrayLen) {
		//             selectClass = "roomDetails room-booked";
		//             titleData = "Booking is Full";
		//           } else {
		//             selectClass = "roomDetails room-partialbooked";
		//             titleData = "Add A New Room";
		//           }
		//         }
		//       });
		//     }
		//     return (
		//       <div className="room" key={i}>
		//         <div
		//           className={selectClass}
		//           onClick={() => this.callAddNewBooking(room)}
		//           title={titleData}
		//         >
		//           <label className="roomLabel">Room Number</label>
		//           <label className="roomNumber">{room.RoomID}</label>
		//         </div>
		//         <div className="buttonHolder" title="Edit Your Bookings">
		//           <a
		//             href="#"
		//             onClick={() => this.callViewEditPage(room)}
		//             className="roomEdit"
		//           >
		//             EDIT
		//           </a>
		//         </div>
		//       </div>
		//     );
		//   });
		// }
		return ( <
			div className = "roomAvailability" >
			<
			div className = "row" >
			<
			div className = "col-sm-12" >
			<
			h1 className = "info" > Room Availability < /h1> <
			hr / >
			<
			/div> < /
			div > <
			div className = "row" >
			<
			div className = "col-sm-12 roomList" > {
				returnRoomDisplayData
			} < /div> < /
			div > <
			hr / >
			<
			div className = "row" >
			<
			div className = "col-sm-4 legend" >
			<
			div className = "legend-available" / >
			<
			label className = "legendInfo" > Available < /label> < /
			div > <
			div className = "col-sm-4 legend" >
			<
			div className = "legend-partial" / >
			<
			label className = "legendInfo" >
			1 Person Accomodation Available <
			/label> < /
			div >

			<
			div className = "col-sm-4 legend" >
			<
			div className = "legend-full" / >
			<
			label className = "legendInfo" > Not Available < /label> < /
			div > <
			/div> < /
			div >
		);
	}
}

function mapStateToProps(state) {
	return {
		filterRoomData: state.filterRoomData,
		showRoomFlag: state.showRoomFlag,
		selectedDates: state.dateReducer,
		gapArrayData: state.gapArrayData,
		roomsList: state.roomsList,
		errorData: state.errorData
	};
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(
//     {
//       setRoomsFlagAction: setRoomsFlagAction,
//       resetRoomDataValue: resetRoomDataValue,
//       selectedRoomDetails: selectedRoomDetails
//     },
//     dispatch
//   );
// }

export default connect(
	mapStateToProps
	// mapDispatchToProps
)(Rooms);