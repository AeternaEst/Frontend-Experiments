import shoppingCartApi, { products } from './../../api/shopping-cart/shopping-cart-api';
import shoppingCartStore from './../../stores/shopping-cart/shopping-cart-store';
import { updatedCart, unsucessfullUpdatedCart } from './../../actions/shopping-cart/shopping-cart-actions';

const defaultState = {
    products: products,
    cart: [],
    waitingForServerResponse: false,
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
                console.log("AddToCartPromise resolved success");
                return shoppingCartApi.getCart();
            }).then(cart => {
                console.log("GetCartPromise resolved success");
                return new Promise((resolve, reject) => resolve(shoppingCartApi.getProducts())).then(products => {return {cart: cart, products:products}});
            }).then(productsAndCart => {
                console.log("ready to dispatch action");
                console.log(productsAndCart.cart);
                console.log(productsAndCart.products);
                const updatedCartAddAction = updatedCart(productsAndCart.products, productsAndCart.cart);
                console.log('action created: ' + updatedCartAddAction);
                shoppingCartStore.dispatch(updatedCartAddAction);
            }).catch(error => {
                console.log("CATCHING ERROR: " + error);
                const unsuccessfullCartAddAction = unsucessfullUpdatedCart(error);
                shoppingCartStore.dispatch(unsuccessfullCartAddAction);
            });

            return {
                ...state,
                waitingForServerResponse: true
            };
            
        case 'REMOVE_FROM_CART':

            const removeFromCartPromise = shoppingCartApi.removeFromCart(action.productId);

            removeFromCartPromise.then(result => {
                console.log("RemoveFromCartPromise resolved success");
                return shoppingCartApi.getCart();
            }).then(cart => {
                console.log("GetCartPromise resolved success");
                return new Promise((resolve, reject) => resolve(shoppingCartApi.getProducts())).then(products => {return {cart: cart, products:products}});
            }).then(productsAndCart => {
                console.log("ready to dispatch action");
                console.log(productsAndCart.cart);
                console.log(productsAndCart.products);
                const updatedCartAddAction = updatedCart(productsAndCart.products, productsAndCart.cart);
                console.log('action created: ' + updatedCartAddAction);
                shoppingCartStore.dispatch(updatedCartAddAction);
            }).catch(error => {
                console.log("CATCHING ERROR: " + error);
                const unsuccessfullCartAddAction = unsucessfullUpdatedCart(error);
                shoppingCartStore.dispatch(unsuccessfullCartAddAction);
            });

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

export default updateCart;