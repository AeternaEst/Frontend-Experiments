import { rootReducer } from "./reducers/root-reducer";
import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./sagas/root-saga";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

// let composeEnhancers = compose;

// if (typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__) {
//   composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
// }

// const reduxStore = createStore(
//   createRootReducer(),
//   initiaState,
//   composeEnhancers(applyMiddleware(sagaMiddleware))
// );

// const newStore: NeosStore = {
//   ...reduxStore,
//   runSaga: sagaMiddleware.run,
//   close: () => newStore.dispatch(END),
// };

// const task = newStore.runSaga(rootSaga);
