import React, { Component } from "react";
import Modal from "react-modal";

import Button from "./Button";
import "./AddTask.css";

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

    addTask = (e) => {
        let form = e.target.parentNode.querySelector(".AddTaskForm");
        let taskText = form.querySelector("#taskTextInput").value;
        let labelText = form.querySelector("#label").value;
        let projectText = form.querySelector("#project").value;
        let scheduleStr = form.querySelector("#date").value;
        let scheduleDate = scheduleStr || undefined;
        let tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        if (scheduleStr === new Date().toISOString().slice(0, 10)) {
            scheduleDate = "Today";
        } else if (scheduleStr === tomorrow.toISOString().slice(0, 10)) {
            scheduleDate = "Tomorrow";
        }

        let state = "progress";
        if (new Date(scheduleDate) < new Date()) {
            state = "backlog";
        }

        if(taskText===''){
            return;
        }
        this.props.createTask({
            taskText,
            labelText,
            projectText,
            scheduleDate,
            state
        });
        this.closeModal();
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
                    <div className="AddTaskForm">
                        <textarea
                            id="taskTextInput"
                            cols="30"
                            rows="10"
                            placeholder="Max 50 letters"
                        ></textarea>
                        <div className="taskOptions">
                            <select name="label" id="label">
                                <option value="UI Design">UI Design</option>
                                <option value="UX Design">UX Design</option>
                                <option value="Bug Fix">Bug fix</option>
                                <option value="Feature Update">
                                    Feature update
                                </option>
                            </select>
                            <select name="project" id="project">
                                <option value="Excel Clone">Excel Clone</option>
                                <option value="Camera App">Camera App</option>
                                <option value="Openboard">Openboard</option>
                                <option value="Todo App">Todo App</option>
                            </select>
                            <input type="date" name="date" id="date" />
                        </div>
                    </div>
                    <button onClick={this.addTask}>Add</button>
                    <button onClick={this.closeModal}>Cancel</button>
                </Modal>
            </div>
        );
    }
}
