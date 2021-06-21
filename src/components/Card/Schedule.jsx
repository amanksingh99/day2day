import React, { Component } from "react";
import { FiCalendar } from "react-icons/fi";
import "./Schedule.css";
export default class Schedule extends Component {
    render() {
        return (
            <div className="Schedule">
                <span>
                    <FiCalendar /> Schedule
                </span>
            </div>
        );
    }
}
