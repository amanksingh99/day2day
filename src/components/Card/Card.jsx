import React, { Component } from "react";
import { MdMoreVert, MdModeEdit } from "react-icons/md";
import Label from "./Label";
import Schedule from "./Schedule";
import ProjectTag from "./ProjectTag";
import "./Card.css";

export default class Card extends Component {
    render() {
        return (
            <div className="Card">
                <MdMoreVert className="Menu-icon" />
                <Label text={"UI Design"} />
                <h5>Low fidelity wireframes</h5>
                <div className="Card__bottom-menu">
                    <Schedule />
                    <ProjectTag />
                </div>
                <MdModeEdit className="edit-icon" />
            </div>
        );
    }
}
