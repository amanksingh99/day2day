import React, { Component } from "react";
import "./Navbar.css";
import SearchBar from "./SearchBar";
import Avatar from "./Avatar";

export default class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
                
                <SearchBar />
                <Avatar />
            </div>
        );
    }
}
