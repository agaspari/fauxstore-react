import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePage from './pages/HomePage';
import ProductList from './pages/ProductList';
import ProductPage from './pages/ProductPage';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/products" component={ProductList} />
                <Route exact path="/product/:id" component={ProductPage} />
            </div>
        </Router>
    );
};

export default AppRouter;