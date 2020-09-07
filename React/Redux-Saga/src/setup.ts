import { rootReducer } from "./reducers/root-reducer";
import { createStore } from "redux";

export const store = createStore(rootReducer);
