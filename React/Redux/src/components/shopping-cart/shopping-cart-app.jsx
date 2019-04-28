import React from 'react';
import ProductList from './product-list';
import ErrorMessage from './error-message';
import CartCounter from './cart-counter';
import CartOverview from './cart-overview';

const texts = {
    counterText: "Number of items",
    addProductText: "Add",
    cartOverviewTexts: {
        name: "Product",
        price: "Price",
        quantity: "Quantity",
        removeProduct: "Remove",
        total: "Total"
    }
}

const propsWithTexts = stateProps => {
    return {
        ...stateProps,
        counterMessage: texts.counterText,
        cartOverviewLabels: texts.cartOverviewTexts,
        addProductLabel: texts.addProductText
    }
}

const ShoppingCartApp = props => {
    const mappedProps = propsWithTexts(props);
    return (
        <div className="shopping-cart-app">
            <div className="shopping-cart-app__top">
                <ErrorMessage {...mappedProps} />
                <CartCounter {...mappedProps} />
            </div>
            <div className="shopping-cart-app__mid">
                <ProductList {...mappedProps} />
                <CartOverview {...mappedProps} />
            </div>
        </div>
    )
}

export default ShoppingCartApp;
