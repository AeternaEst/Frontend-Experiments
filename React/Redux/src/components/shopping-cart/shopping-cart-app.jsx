import React from 'react';
import ProductList from './product-list';
import ErrorMessage from './error-message';
import CartCounter from './cart-counter';
import CartOverview from './cart-overview';

const ShoppingCartApp = props => {
    return (
        <div className="shopping-cart-app">
            <div className="shopping-cart-app__top">
                <ErrorMessage {...props} />
                <CartCounter {...props} />
            </div>
            <div className="shopping-cart-app__mid">
                <ProductList {...props} />
                <CartOverview {...props} />
            </div>
        </div>
    )
}

export default ShoppingCartApp;
