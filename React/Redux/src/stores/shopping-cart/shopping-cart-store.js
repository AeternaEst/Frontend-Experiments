import { createStore, applyMiddleware, compose } from 'redux';
import updateCartPromiseReducer from '../../reducers/shopping-cart/shopping-cart-reducer-promise';
import updateCartCleanReducer from '../../reducers/shopping-cart/shopping-cart-reducer-clean';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './../../sagas/shopping-cart/shopping-cart-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

//const shoppingCartStore = createStore(updateCartPromiseReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// create a redux store with our reducer above and middleware
let shoppingCartStore = createStore(
    updateCartCleanReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

// run the saga
sagaMiddleware.run(rootSaga);

export default shoppingCartStore;