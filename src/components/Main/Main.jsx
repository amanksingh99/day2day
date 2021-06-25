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
                    label: ['UI Design', 'pink', '#333'],
                    text: "improve UI of todo app",
                    schedule: ['Schedule','lightgray'],
                    project: "Project",
                    state: "completed",
                },
                {
                    id: 2,
                    label: ['UI Design', 'pink', '#333'],
                    text: "improve UI of todo app",
                    schedule: ['Schedule','lightgray'],
                    project: "Project",
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

        //creating label data
        let label = [labelText];
        if(labelText==='Label'){
            label.push('gray','white');
        } else if(labelText==='UI Design'){
            label.push('pink', '#333');
        } else if(labelText==='Bug Fix'){
            label.push('lightgreen', '#333');
        } else if(labelText === 'Feature Update'){
            label.push('#0066ff', 'white');
        } else if(labelText === 'UX Design'){
            label.push('tomato', 'white');
        }

        //creating schedule data
        let schedule = [scheduleDate];
        if(scheduleDate=== 'Schedule'){
            schedule.push('lightgray');
        }else if(state === 'backlog'){
            schedule.push('red');
        } else if(state === 'progress'){
            schedule.push('blue');
        } else if(state==='completed'){
            schedule.push('green');
        }

        //new task array
        let newTasks = [
            {
                id,
                text: taskText,
                label,
                schedule,
                project: projectText,
                state,
            },
            ...allTasks,
        ];

        //updating state
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
