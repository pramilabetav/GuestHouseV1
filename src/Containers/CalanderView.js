import React, { Component } from "react";
import { render } from "react-dom";
// import events from "./events";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
// import events from "../Stub/events.js";
import { connect } from "react-redux";

const localizer = BigCalendar.momentLocalizer(moment)
// moment.locale("en");
// BigCalendar.momentLocalizer(moment);

const allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);

class CalanderView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            view: "month",
            date: new Date(moment(this.props.selectedDateReducer.checkInDate).format("DD-MM-YYYY")),
            width: 500
        };
    }
    handleSubmit() {
        alert("hello world");
    }
    componentDidMount() {
        // this.setState({
        //     date: new Date(2019, 3, 11)
        // });
        console.log("CalanderView componentDidMount : date : ", this.state.date);
        window.addEventListener("resize", () => {
            this.setState({
                width: window.innerWidth,
                height: window.innerHeight
            });
        });
    }

    render() {
        console.log("CalanderView : events : ", this.props.events);
        return (
            <div style={{ height: 700 }}>
                <label className= "monthName">{(this.state.date).toLocaleString('en-us', { month: 'long' })} Month Calander </label> <br/>
                <button onClick={() => this.setState({ view: "day" })}>Day</button>
                <button onClick={() => this.setState({ view: "month" })}>Month</button>
                <BigCalendar
                    localizer={localizer}
                    style={{ height: 500, width: this.state.width }}
                    toolbar={false}
                    events={this.props.events}
                    step={60}
                    views={allViews}
                    view={this.state.view}
                    onView={() => { }}
                    date={this.state.date}
                    onNavigate={date => this.setState({ date })}
                    popup={true}
                    defaultDate={new Date(moment(this.props.selectedDateReducer.checkInDate).format("DD-MM-YYYY"))}
                />
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        roomList: state.roomList,
        events : state.events,
		selectedDateReducer: state.dateReducer
    };
}

export default connect(
    mapStateToProps
    // mapDispatchToProps
)(CalanderView);
