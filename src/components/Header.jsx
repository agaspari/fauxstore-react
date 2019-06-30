import React, { Component } from "react";
import { IconContext } from "react-icons";
import { FaShoppingCart } from 'react-icons/fa';

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/">React</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2" aria-controls=".dual-collapse2" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="navbar-collapse collapse w-100 order-1 dual-collapse2">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item" id="li-home">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item" id="li-shop">
                            <a className="nav-link" href="/products">Products</a>
                        </li>
                    </ul>
                </div>
                
                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                    <ul className="navbar-nav ml-auto">
                        <li>
                            <IconContext.Provider value={{ size: "1.5em", color: "white", className: "global-class-name", style: { verticalAlign: 'middle' } }}>
                                    <FaShoppingCart/>
                                </IconContext.Provider>
                                <span style={{ color: "white" }}>2</span>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;