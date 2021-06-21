import React, { Component } from "react";

import "./Button.css";

export default class Button extends Component {
    render() {
        return (
            <>
                <button
                    onClick={this.props.clickAction}
                    className={`btn btn--${this.props.styleName}`}
                >
                    {this.props.children}
                </button>
            </>
        );
    }
}
