import { connect } from 'react-redux'
import ShoppingCartApp from './shopping-cart-app';
import { addToCart } from './../../actions/shopping-cart/shopping-cart-actions';

function mapStateToProps(state) {
    return {
        products: state.products
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addProduct: id => {
            dispatch(addToCart(id))
      }
    }
}

const ShoppingCartView = connect(mapStateToProps, mapDispatchToProps)(ShoppingCartApp);

export default ShoppingCartView;