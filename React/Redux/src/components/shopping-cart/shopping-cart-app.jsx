import React from 'react';
import ProductList from './product-list';

const ShoppingCartApp = props => (
    <div className="shopping-cart">
        <ProductList {...props}/>
    </div>
)

export default ShoppingCartApp;
