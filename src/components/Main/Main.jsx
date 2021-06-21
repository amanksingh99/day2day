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
   
    render() {
        return (
            <div className="Main">
                <div className="Main__topbar">
                    <h1>Tasks</h1>
                    <div className="Main__tools">
                        <AddTask customStyles={customStyles} />
                        <FilterTask customStyles={customStyles} />
                    </div>
                </div>
                <div className="Main__tasks">
                    <div className="Main__backlog">
                        <h3>Backlog</h3>
                        <div className="Main__taskColumn">
                            <Card></Card>
                            <Card></Card>
                            <Card></Card>
                            <Card></Card>
                        </div>
                    </div>
                    <div className="Main__progress">
                        <h3>In progress</h3>
                        <div className="Main__taskColumn">
                            <Card></Card>
                            <Card></Card>
                            <Card></Card>
                            <Card></Card>
                        </div>
                    </div>
                    <div className="Main__completed">
                        <h3>Completed</h3>
                        <div className="Main__taskColumn">
                            <Card></Card>
                            <Card></Card>
                            <Card></Card>
                            <Card></Card>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
