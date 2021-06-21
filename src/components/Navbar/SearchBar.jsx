import React, { Component } from "react";
import "./SearchBar.css";
import { FiSearch } from "react-icons/fi";

export default class SearchBar extends Component {
    render() {
        return (
            <div className="SearchBar">
                <FiSearch className="search-icon" />
                <input type="text" placeholder="Search task" />
            </div>
        );
    }
}
