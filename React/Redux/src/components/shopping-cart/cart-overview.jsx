import React from 'react';

const CartOverview = (props) => {
    const { cart, cartOverviewLabels, removeProduct } = props;
    const totalPerCartItem = cart.map(cartItem => cartItem.product.price * cartItem.quantity);
    const cartTotal = totalPerCartItem.length ? totalPerCartItem.reduce((prev, next) => prev + next) : null;
    return (
        cart.length != 0 &&
            (<div className="cart-overview">
            <ul>
            {
                cart.map(cartItem => {
                    return <li key={cartItem.product.id} className="cart-overview__product">
                        {cartOverviewLabels.name}:{cartItem.product.name} -
                        {cartOverviewLabels.price}:{cartItem.product.price} -
                        {cartOverviewLabels.quantity}: {cartItem.quantity}
                        <button onClick={() => removeProduct(cartItem.product.id)}>{cartOverviewLabels.removeProduct}</button>
                    </li>
                })
            }
            </ul>
            <div className="cart-overview__total">
                <span>{cartOverviewLabels.total}:{cartTotal}</span>
            </div>
        </div>)
    );
}

export default CartOverview;