import React, { Component } from "react";
// import events from "../Content/Events";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

moment.locale("en");
BigCalendar.momentLocalizer(moment);

const allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);
const events = [
  {
    title: "EmployeeName1011",
    allDay: true,
    start: new Date(2019, 3, 3),
    end: new Date(2019, 3, 6)
  },
  {
    title: "EmployeeName1012",
    start: new Date(2019, 3, 3),
    end: new Date(2019, 3, 6)
  }
];
class BookingCalendar extends Component {
  state = {
    view: "month",
    date: new Date(2019, 3, 1),
    width: 900,
    height: 900
  };

  handleSubmit() {
    alert("hello world");
  }
  componentDidMount() {
    window.addEventListener("resize", () => {
      this.setState({
        width: window.innerWidth,
        height: window.innerHeight
      });
    });
  }

  render() {
    return (
      <div style={{ height: 700 }}>
        <button onClick={() => this.setState({ view: "day" })}>Day</button>
        <button onClick={() => this.setState({ view: "month" })}>Month</button>
        <BigCalendar
          events={events}
          style={{ height: 900, width: this.state.width }}
          toolbar={false}
          step={60}
          views={allViews}
          view={this.state.view}
          onView={() => {}}
          date={this.state.date}
          onNavigate={date => this.setState({ date })}
          popup={true}
          defaultDate={new Date(2019, 3, 1)}
        />
      </div>
    );
  }
}

export default BookingCalendar;
