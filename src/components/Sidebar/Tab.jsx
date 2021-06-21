import React, { Component } from "react";
import "./Tab.css";
export default class Tab extends Component {
    render() {
        return (
            <div className={this.props.active ? "Tab active-tab" : "Tab"}>
                <div className="Tab__content">
                    <div>{this.props.children}</div>
                    <div>{this.props.text}</div>
                </div>
            </div>
        );
    }
}
