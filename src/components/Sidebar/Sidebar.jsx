import React, { Component } from "react";
import Brand from "./Brand";
import Tab from "./Tab";
import "./Sidebar.css";

import { RiDashboardLine } from "react-icons/ri";
import { IoAnalytics } from "react-icons/io5";
import { FiSettings } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";

export default class Sidebar extends Component {
    render() {
        return (
            <div className="Sidebar">
                <Brand />
                <div className="Sidebar__tabs">
                    <Tab text={"Dashboard"} active={true}>
                        <RiDashboardLine />
                    </Tab>
                    <Tab text={"Analytics"}>
                        <IoAnalytics />
                    </Tab>
                    <Tab text={"Settings"}>
                        <FiSettings />
                    </Tab>
                </div>
                <div className="Sidebar__logout">
                    <FiLogOut />
                    Logout
                </div>
            </div>
        );
    }
}
