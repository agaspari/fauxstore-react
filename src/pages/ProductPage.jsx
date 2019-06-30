import React, { Component } from "react";

export default class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
        }
    }

    render() {
        const { id } = this.state;
        return <h1>{id}</h1>;
    }
}