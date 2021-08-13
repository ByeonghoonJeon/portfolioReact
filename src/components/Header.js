import React, { Component } from "react";
import { Link } from "react-router-dom";
class Header extends Component {
  render() {
    const myCurrentTime = new Date().toLocaleString();
    function myDay() {
      const currentDay = new Date().getDay();
      const dayArray = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      return dayArray[currentDay];
    }
    function myMonth() {
      const currentMonth = new Date().getMonth();
      const monthArray = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      return monthArray[currentMonth];
    }
    return (
      <div className="header">
        <Link to="/home" className="link">
          Home
        </Link>
        <p className="date">
          Good day! today is {myDay()} {new Date().getDate()}, {myMonth()}
        </p>
        <h2 className="title">Nathan Jeon</h2>
        <p className="secondTitle mb-3">Explore his interesting portfolio</p>
      </div>
    );
  }
}

export default Header;
