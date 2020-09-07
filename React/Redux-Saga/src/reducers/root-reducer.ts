import { combineReducers } from "redux";
import deprecatedReducerOne, {
  DeprecatedReducerOneState,
} from "./app-setup/deprecated-reducer-one";
import deprecatedReducerTwo, {
  DeprecatedReducerTwoState,
} from "./app-setup/deprecated-reducer-two";

export interface State {
  counterState: DeprecatedReducerOneState;
  messageState: DeprecatedReducerTwoState;
}

export const rootReducer = combineReducers({
  counterState: deprecatedReducerOne,
  messageState: deprecatedReducerTwo,
});
