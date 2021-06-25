import React, { Component } from "react";
import { FiCalendar } from "react-icons/fi";
import "./Schedule.css";
export default class Schedule extends Component {
    render() {
        let [text, borderColor] = this.props.scheduleData;
        return (
            <div className="Schedule" style={{border:`1px solid ${borderColor}`}}>
                <span>
                    <FiCalendar /> {text}
                </span>
            </div>
        );
    }
}
