import { combineReducers } from "redux";
import deprecatedReducerOne from "./app-setup/deprecated-reducer-one";
import deprecatedReducerTwo from "./app-setup/deprecated-reducer-two";
import loginReducer, { LoginState } from "./login-reducer";
import propertyReducer from "./property-reducer";
import userReducer from "./user-reducer";

export const rootReducer = combineReducers({
  counterState: deprecatedReducerOne,
  messageState: deprecatedReducerTwo,
  loginState: loginReducer,
  propertyState: propertyReducer,
  user: userReducer,
});

/* Manual reducer mapping */
// export const rootReducer = (state: any, action: any) => {
//   const counterState = deprecatedReducerOne(state && state.counterState, action);
//   const messageState = deprecatedReducerTwo(state && state.messageState, action);
//   const loginState = loginReducer(state && state.loginState, action);
//   const propertyState = propertyReducer(state && state.propertyState, action);
//   return {
//     counterState,
//     messageState,
//     loginState,
//     propertyState
//   }
// }

export type State = ReturnType<typeof rootReducer>;
