import React, { Component } from "react";
import Product from "../components/ProductCard";

export default class ProductList extends Component {
    constructor() {
        super();
        this.products = [
            {
                name: 'Product Name',
                price: '$3.00',
                categories: ['A', 'B'],
                id: 0,
            },
            {
                name: 'Product Name',
                price: '$4.00',
                categories: ['A'],
                id: 1,
            },
            {
                name: 'Product Name',
                price: '$5.00',
                categories: ['B'],
                id: 2,
            },
            {
                name: 'Product Name',
                price: '$31.00',
                categories: ['A'],
                id: 3,
            },
            {
                name: 'Product Name',
                price: '$3.00',
                categories: ['A'],
                id: 4,
            },
            {
                name: 'Product Name',
                price: '$3.32',
                categories: ['B'],
                id: 5,
            },
        ];

        this.state = {
            currentFilter: '',
            currentSort: 0,
            currentProducts: this.products,
        }

        this.applyFilter = this.applyFilter.bind(this);
    }

    componentDidMount() {
        document.getElementById("li-shop").classList.add("active");
    }

    applyFilter = (id) => {
        this.setState({
            currentFilter: id,
            currentProducts: (id==='') ? this.products : this.products.filter((product) => product.categories.includes(id)),
        });
    }

    applySort = (sort) => {
        const { currentSort } = this.state;

        if(sort === currentSort) this.setState({ currentSort: 0});
        else this.setState({ currentSort: sort });
    }
    render() {
        const { currentFilter, currentSort, currentProducts } = this.state;

        return(
            <div className="page-container">                
                <div className="product-container row">
                    <div className="product-filters col-md-3 col-sm-12 col-xs-12">
                        <div className="page-header-container">
                            <h1 className="page-title no-border">&nbsp;</h1>
                        </div>
                        <ul>
                            <li><h2>Filters</h2></li>
                            <li><a href="#" className={`btnFilter${(currentFilter==='') ? ' active' : ''}`} onClick={() => this.applyFilter('')}>All Products</a></li>
                            <li><a href="#" className={`btnFilter${(currentFilter==='A') ? ' active' : ''}`} onClick={() => this.applyFilter('A')}>Product A's</a></li>
                            <li><a href="#" className={`btnFilter${(currentFilter==='B') ? ' active' : ''}`} onClick={() => this.applyFilter('B')}>Product B's</a></li>
                        </ul>
                        <br></br>
                        <ul>
                            <li><h2>Sort</h2></li>
                            <li><a href="#" className={`btnFilter${(currentSort===1) ? ' active' : ''}`} onClick={() => this.applySort(1)}>Price: Lowest to Highest</a></li>
                            <li><a href="#" className={`btnFilter${(currentSort===2) ? ' active' : ''}`} onClick={() => this.applySort(2)}>Price: Highest to Lowest</a></li>
                        </ul>
                    </div>
                    <div className="product-list col-md-9 col-sm-12">
                        <div className="page-header-container">
                            <h1 className="page-title">Products</h1>
                        </div>
                        <div className="row">
                            {currentProducts.map((product, key) => {
                                return (
                                    <Product
                                        name={product.name}
                                        price={product.price}
                                        id={product.id}
                                        key={key}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
}