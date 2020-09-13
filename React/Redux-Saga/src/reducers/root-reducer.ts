import { combineReducers } from "redux";
import deprecatedReducerOne, {
  DeprecatedReducerOneState,
} from "./app-setup/deprecated-reducer-one";
import deprecatedReducerTwo, {
  DeprecatedReducerTwoState,
} from "./app-setup/deprecated-reducer-two";
import loginReducer, { LoginState } from "./login-reducer";

export interface State {
  counterState: DeprecatedReducerOneState;
  messageState: DeprecatedReducerTwoState;
  loginState: LoginState;
}

export const rootReducer = combineReducers({
  counterState: deprecatedReducerOne,
  messageState: deprecatedReducerTwo,
  loginState: loginReducer
});
