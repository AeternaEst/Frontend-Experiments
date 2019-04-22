import React from 'react';

const CartCounter = (props) => {
    const { counterMessage, numOfItemsInCart } = props;
    return (
        <div className="cart-counter">
            <h4>{counterMessage}:{numOfItemsInCart}</h4>
        </div>
    );
}

export default CartCounter;