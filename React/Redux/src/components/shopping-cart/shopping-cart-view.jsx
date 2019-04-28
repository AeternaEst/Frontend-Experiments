import { connect } from 'react-redux'
import ShoppingCartApp from './shopping-cart-app';
import { addToCart, removeFromCart } from './../../actions/shopping-cart/shopping-cart-actions';

function mapStateToProps(state) {
    console.log("Mapping state to props");
    console.log(state);
    return {
        products: state.products,
        showError: state.error.errorDetected,
        errorMessage: state.error.errorMessage,       
        numOfItemsInCart: state.cart.length,
        cart: state.cart,     
        isLoading: state.waitingForServerResponse 
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addProduct: id => {
            dispatch(addToCart(id))
      },
        removeProduct: id => {
            dispatch(removeFromCart(id))
        }
    }
}

const ShoppingCartView = connect(mapStateToProps, mapDispatchToProps)(ShoppingCartApp);

export default ShoppingCartView;