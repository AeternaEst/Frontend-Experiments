import { connect } from 'react-redux'
import ShoppingCartApp from './shopping-cart-app';
import { addToCart, removeFromCart } from './../../actions/shopping-cart/shopping-cart-actions';

const texts = {
    counterText: "Number of items",
    cartOverviewTexts: {
        name: "Product",
        price: "Price",
        quantity: "Quantity",
        removeProduct: "Remove",
        total: "Total"
    }
}

function mapStateToProps(state) {
    console.log("Mapping state to props");
    console.log(state);
    return {
        products: state.products,
        showError: state.error.errorDetected,
        errorMessage: state.error.errorMessage,
        counterMessage: texts.counterText,
        numOfItemsInCart: state.cart.length,
        cart: state.cart,
        cartOverviewLabels: texts.cartOverviewTexts
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