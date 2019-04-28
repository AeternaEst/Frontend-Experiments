import shoppingCartApi, { products } from '../../api/shopping-cart/shopping-cart-api';

const defaultState = {
    products: products,
    cart: [],
    waitingForServerResponse: false,
    error: {
        errorDetected: false,
        errorMessage: ""
    }
}

const updateCartCleanReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':

            console.log("ADD_TO_CART in reducer");

            return {
                ...state,
                waitingForServerResponse: true
            };
            
        case 'REMOVE_FROM_CART':

        console.log("REMOVE_FROM_CART in reducer");

            return {
                ...state,
                waitingForServerResponse: true
            };

        case 'UPDATED_CART':
            console.log('UPDATED_CART: successfully resolved cart');
            console.log(action.products);
            console.log(action.cart);
            return {
                products: action.products.map(p => p),
                cart: Object.assign(action.cart),
                error: {
                    errorDetected: false,
                    errorMessage: ""
                },
                waitingForServerResponse: false
            }

        case 'UNSUCCESSFULL_UPDATED_CART':
            console.log('UNSUCCESSFULL_UPDATED_CART: ' + action.error);
            return {
                ...state,
                error: {
                    errorDetected: true,
                    errorMessage: action.error
                },
                waitingForServerResponse: false
            }
        
        default:
            return state;
    }
}

export default updateCartCleanReducer;