import React, { Component } from "react";

import { FiTag } from "react-icons/fi";
import "./ProjectTag.css";

export default class ProjectTag extends Component {
    render() {
        let text =
            this.props.text.length <= 12
                ? this.props.text
                : this.props.text.slice(0, 12) + "...";

        return (
            <div className="ProjectTag">
                <FiTag />
                &nbsp;
                <span>{text}</span>
            </div>
        );
    }
}
