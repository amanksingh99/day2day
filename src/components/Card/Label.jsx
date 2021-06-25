import React, { Component } from "react";
import "./Label.css";

export default class Label extends Component {
    render() {
        let [text,bgcolor,color] = this.props.labelData;
        return (
            <div className="Label" style={{backgroundColor:bgcolor, color:color}}>
                <span>{text}</span>
            </div>
        );
    }
}
