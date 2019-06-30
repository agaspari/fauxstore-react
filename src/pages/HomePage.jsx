import React, { Component } from "react";
export default class HomePage extends Component {
    render() {
        return(
            <h1>Home</h1>
        );
    }

    componentDidMount() {
        document.getElementById("li-home").classList.add("active");
    }
}