import shoppingCartApi, { products } from './../../api/shopping-cart/shopping-cart-api';

const defaultState = {
    products: products,
    cart: [],
    error: {
        errorDetected: false,
        errorMessage: ""
    }
}

const updateCart = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const addToCartPromise = shoppingCartApi.addToCart(action.productId);

            addToCartPromise.then(result => {
                console.log("API success");
                const cartAfterAdd = shoppingCartApi.getCart();
                console.log(cartAfterAdd);
                return {
                    products: result.data.map(p => p),
                    cart: Object.assign(cartAfterAdd),
                    error: {
                        errorDetected: false,
                        errorMessage: ""
                    }
                };
            },
            error => {
                console.log("API failed");
                return {
                    ...state,
                    error: {
                        errorDetected: true,
                        errorMessage: error.data
                    }
                }
            });

            return state;
            
        case 'REMOVE_FROM_CART':
            const removeFromCartPromise = shoppingCartApi.removeFromCart(action.productId);

            removeFromCartPromise(result => {
                console.log("API success");
                const cartAfterRemove = shoppingCartApi.getCart();
                return {
                    products: result.data.map(p => p),
                    cart: Object.assign(cartAfterRemove),
                    error: {
                        errorDetected: false,
                        errorMessage: ""
                    }
                };
            },
            error => {
                console.log("API failed");
                return {
                    ...state,
                    error: {
                        errorDetected: true,
                        errorMessage: error.data
                    }
                }
            });

            return state;
            
        default:
            return state;
    }
}

export default updateCart;