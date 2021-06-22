import React, { Component } from "react";
import Modal from "react-modal";
import "./Main.css";

import Card from "../Card/Card";
import AddTask from "./AddTask";
import FilterTask from "./FilterTask";

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        borderRadius: "5px",
    },
};

Modal.setAppElement("#root");

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [
                {
                    id: 1,
                    label: "UI Design",
                    text: "improve UI of todo app improve UI of todo app improve UI of todo app improve UI of todo app",
                    schedule: "Schedule",
                    project: "Project",
                    state: "completed",
                },
                {
                    id: 2,
                    label: "Feature Update",
                    text: "add modal",
                    schedule: "Tomorrow",
                    project: "Project",
                    state: "progress",
                },
                {
                    id: 3,
                    label: "UX Design",
                    text: "UX for todo app",
                    schedule: "Schedule",
                    project: "Cross Platform Spreadsheet App",
                    state: "backlog",
                },
            ],
        };
    }

    createTask = ({
        taskText,
        labelText = "Label",
        scheduleDate = "Schedule",
        projectText = "Project",
        state,
    }) => {
        let allTasks = [...this.state.tasks];
        let id = allTasks.length + 1;
        let newTasks = [
            {
                id,
                text: taskText,
                label: labelText,
                schedule: scheduleDate,
                project: projectText,
                state,
            },
            ...allTasks,
        ];
        this.setState({ tasks: newTasks });
    };
    render() {
        let backlogTasks = this.state.tasks.filter(
            (task) => task.state === "backlog"
        );
        let progressTasks = this.state.tasks.filter(
            (task) => task.state === "progress"
        );
        let completedTask = this.state.tasks.filter(
            (task) => task.state === "completed"
        );

        return (
            <div className="Main">
                <div className="Main__topbar">
                    <h1>Tasks</h1>
                    <div className="Main__tools">
                        <AddTask
                            customStyles={customStyles}
                            createTask={this.createTask}
                        />
                        <FilterTask customStyles={customStyles} />
                    </div>
                </div>
                <div className="Main__tasks">
                    <div className="Main__backlog">
                        <h3>Backlog</h3>
                        <div className="Main__taskColumn">
                            {backlogTasks.map((taskObj) => {
                                return (
                                    <Card
                                        key={taskObj.id}
                                        text={taskObj.text}
                                        label={taskObj.label}
                                        schedule={taskObj.schedule}
                                        project={taskObj.project}
                                    />
                                );
                            })}
                        </div>
                    </div>
                    <div className="Main__progress">
                        <h3>In progress</h3>

                        <div className="Main__taskColumn">
                            {progressTasks.map((taskObj) => {
                                return (
                                    <Card
                                        key={taskObj.id}
                                        text={taskObj.text}
                                        label={taskObj.label}
                                        schedule={taskObj.schedule}
                                        project={taskObj.project}
                                    />
                                );
                            })}
                        </div>
                    </div>
                    <div className="Main__completed">
                        <h3>Completed</h3>
                        <div className="Main__taskColumn">
                            {completedTask.map((taskObj) => {
                                return (
                                    <Card
                                        key={taskObj.id}
                                        text={taskObj.text}
                                        label={taskObj.label}
                                        schedule={taskObj.schedule}
                                        project={taskObj.project}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
