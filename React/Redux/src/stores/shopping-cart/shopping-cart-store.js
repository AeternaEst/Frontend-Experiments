import { createStore } from 'redux';
import updateCart from './../../reducers/shopping-cart/shopping-cart-reducer';

const shoppingCartStore = createStore(updateCart);

export default shoppingCartStore;