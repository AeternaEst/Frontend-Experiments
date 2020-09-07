import { rootReducer } from "./reducers/root-reducer";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(rootReducer, composeWithDevTools());
