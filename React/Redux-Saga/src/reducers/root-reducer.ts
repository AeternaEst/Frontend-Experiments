import { combineReducers } from "redux";
import deprecatedReducerOne from "./app-setup/deprecated-reducer-one";
import deprecatedReducerTwo from "./app-setup/deprecated-reducer-two";
import loginReducer, { LoginState } from "./login-reducer";
import propertyReducer from "./property-reducer";

export const rootReducer = combineReducers({
  counterState: deprecatedReducerOne,
  messageState: deprecatedReducerTwo,
  loginState: loginReducer,
  propertyState: propertyReducer
});

export type State = ReturnType<typeof rootReducer>;
