import React, { Component } from "react";
import "./Label.css";

export default class Label extends Component {
    render() {
        return (
            <div className="Label">
                <span>{this.props.text}</span>
            </div>
        );
    }
}
