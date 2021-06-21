import React, { Component } from "react";

import { FiTag } from "react-icons/fi";
import "./ProjectTag.css";

export default class ProjectTag extends Component {
    render() {
        return (
            <div className="ProjectTag">
                <FiTag />
                &nbsp;
                <span>Excel Clone</span>
            </div>
        );
    }
}
