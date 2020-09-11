import { rootReducer } from "./reducers/root-reducer";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "@redux-saga/core";
import deprecatedSaga from "./sagas/app-setup/deprecated-saga";

const devTools = composeWithDevTools();
const sagaMiddleware = createSagaMiddleware()

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(deprecatedSaga);
