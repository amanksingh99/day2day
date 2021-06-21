import React, { Component } from "react";
import Modal from "react-modal";

import Button from "./Button";

import { FiPlusSquare } from "react-icons/fi";

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
                <Button clickAction={this.openModal} styleName="add">
                    <FiPlusSquare /> New Task
                </Button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={this.props.customStyles}
                    contentLabel="Example Modal"
                >
                    <h2>Create New Task</h2>

                    <form>
                        <input />
                        <button>tab navigation</button>
                        <button>stays</button>
                        <button>inside</button>
                    </form>
                    <button onClick={this.closeModal}>Cancel</button>
                </Modal>
            </div>
        );
    }
}
