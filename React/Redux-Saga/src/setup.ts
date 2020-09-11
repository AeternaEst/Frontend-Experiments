import { rootReducer } from "./reducers/root-reducer";
import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "@redux-saga/core";
import deprecatedSaga from "./sagas/app-setup/deprecated-saga";

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(sagaMiddleware),
  ));

sagaMiddleware.run(deprecatedSaga);
