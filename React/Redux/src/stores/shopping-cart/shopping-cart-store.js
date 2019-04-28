import { createStore, applyMiddleware } from 'redux';
import updateCartPromiseReducer from '../../reducers/shopping-cart/shopping-cart-reducer-promise';
import updateCartCleanReducer from '../../reducers/shopping-cart/shopping-cart-reducer-clean';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './../../sagas/shopping-cart/shopping-cart-saga';

//const shoppingCartStore = createStore(updateCartPromiseReducer);

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// create a redux store with our reducer above and middleware
let shoppingCartStore = createStore(
    updateCartCleanReducer,
  applyMiddleware(sagaMiddleware)
);

// run the saga
sagaMiddleware.run(rootSaga);

export default shoppingCartStore;