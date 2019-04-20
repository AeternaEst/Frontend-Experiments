import shoppingCartApi from './../../api/shopping-cart/shopping-cart-api';

const defaultState = {
    products: shoppingCartApi.getProducts(),
    cart: []
}

const updateCart = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const productsAfterAdd = shoppingCartApi.addToCart(action.productId);
            const cartAfterAdd = shoppingCartApi.getCart();
            return {
                products: productsAfterAdd,
                cart: cartAfterAdd
            };
        case 'REMOVE_FROM_CART':
            const productsAfterRemove = shoppingCartApi.removeFromCart(action.productId);
            const cartAfterRemove = shoppingCartApi.getCart();
            return {
                products: productsAfterAdd,
                cart: cartAfterRemove
            };
        default:
            return state;
    }
}

export default updateCart;