import React, { Component } from "react";

export default class ProductCard extends Component {
    render(){
        const { name, price, id } = this.props;

        return(
            <div className="card product-card col-md-3">
                <img className="card-img-top" src="https://via.placeholder.com/250x250" alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{price}</p>
                    <a href="#" className="btn btn-primary" target="_self">Add to Cart</a>
                    <a href={`/product/${id}`} className="btn btn-secondary">View Product</a>
                </div>
            </div>
        );
    }
}