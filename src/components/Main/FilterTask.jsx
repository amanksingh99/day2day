import React, { Component } from "react";
import Modal from "react-modal";

import Button from "./Button";

import { FiFilter } from "react-icons/fi";

export default class AddTask extends Component {
    constructor(props) {
        super(props);
        this.state = { modalIsOpen: false };
    }

    openModal = () => {
        this.setState({ modalIsOpen: true });
    };

    afterOpenModal = () => {
        // references are now sync'd and can be accessed.
        // this.subtitle.style.color = "#f00";
    };

    closeModal = () => {
        this.setState({ modalIsOpen: false });
    };
    render() {
        return (
            <div>
                <Button clickAction={this.openModal} styleName="filter">
                    <FiFilter /> Filter Task
                </Button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={this.props.customStyles}
                    contentLabel="Example Modal"
                >
                    <h2>Filter Task</h2>
                    <button onClick={this.closeModal}>Cancel</button>
                </Modal>
            </div>
        );
    }
}
