import React, { Component } from "react";
import "./Main.css";
import Card from "../Card/Card";

import { FiPlusSquare } from "react-icons/fi";
import { FiFilter } from "react-icons/fi";

export default class Main extends Component {
    render() {
        return (
            <div className="Main">
                <div className="Main__topbar">
                    <h1>Tasks</h1>
                    <div className="Main__tools">
                        <div className="Main__btn Main__btn--add">
                            New Task <FiPlusSquare />
                        </div>

                        <div className="Main__btn Main__btn--filter">
                            Filter Task <FiFilter />
                        </div>
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
