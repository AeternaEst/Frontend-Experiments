import "regenerator-runtime/runtime";
import { takeLatest, call, put } from "redux-saga/effects";
import shoppingCartApi from './../../api/shopping-cart/shopping-cart-api';
import { updatedCart, unsucessfullUpdatedCart } from '../../actions/shopping-cart/shopping-cart-actions';

function* rootSaga() {
    yield takeLatest('ADD_TO_CART', workerSagaAdd)
    yield takeLatest('REMOVE_FROM_CART', workerSagaRemove)
  }

// watcher saga: watches for actions dispatched to the store, starts worker saga
function* watcherSagaAdd() {
  yield takeLatest("ADD_TO_CART", workerSagaAdd);
}

function* watcherSagaRemove() {
    yield takeLatest("ADD_TO_CART", workerSagaRemove);
  }

// worker saga: makes the api call when watcher saga sees the action
function* workerSagaAdd(action) {
  try {
    console.log("Starting workerSaga: " + action.productId);
    const addToCartResponse = yield call(() => shoppingCartApi.addToCart(action.productId));
    console.log("addToCart finished: " + addToCartResponse);
    const cart = yield call(() => shoppingCartApi.getCart());
    console.log("getCart finished: " + cart);
    const products = yield call(() => shoppingCartApi.getProducts());
    console.log("getProducts finished: " + products);

    // dispatch a success action to the store
    yield put(updatedCart(products, cart));
  
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put(unsucessfullUpdatedCart(error));
  }
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSagaRemove(action) {
    try {
      console.log("Starting workerSaga: " + action.productId);
      const addToCartResponse = yield call(() => shoppingCartApi.removeFromCart(action.productId));
      console.log("addToCart finished: " + addToCartResponse);
      const cart = yield call(() => shoppingCartApi.getCart());
      console.log("getCart finished: " + cart);
      const products = yield call(() => shoppingCartApi.getProducts());
      console.log("getProducts finished: " + products);
  
      // dispatch a success action to the store
      yield put(updatedCart(products, cart));
    
    } catch (error) {
      // dispatch a failure action to the store with the error
      yield put(unsucessfullUpdatedCart(error));
    }
  }

export default rootSaga;