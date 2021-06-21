import React, { Component } from "react";
import { MdMoreVert } from "react-icons/md";
import Label from "./Label";
import Schedule from "./Schedule";
import ProjectTag from "./ProjectTag";
import "./Card.css";

export default class Card extends Component {
    render() {
        return (
            <div className="Card">
                <MdMoreVert className="Menu-icon" />
                <Label text={this.props.label} />
                <h5>{this.props.text}</h5>
                <div className="Card__bottom-menu">
                    <Schedule text={this.props.schedule} />
                    <ProjectTag text={this.props.project} />
                </div>
            </div>
        );
    }
}
