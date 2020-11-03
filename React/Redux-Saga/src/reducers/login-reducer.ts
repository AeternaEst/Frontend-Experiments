import {
  LoginActions,
  SET_ACTIVE_USER,
  UNSUCCESSFUL_LOGIN,
  CLEAR_ACTIVE_USER,
  SUCCESSFUL_LOGIN,
  LOGIN_STARTED,
} from "../actions/login-actions";
import { AppUser } from "../types/app-user";

export interface LoginState {
  activeUser?: AppUser;
  unsuccessfulLogin: boolean;
  isLoginInProgress: boolean;
}

const defaultState: LoginState = {
  activeUser: undefined,
  unsuccessfulLogin: false,
  isLoginInProgress: false
};

const loginReducer = (
  state = defaultState,
  action: LoginActions
): LoginState => {
  switch (action.type) {
    case SET_ACTIVE_USER:
      return {
        ...state,
        activeUser: action.user,
      };
    case CLEAR_ACTIVE_USER:
      return {
        ...state,
        activeUser: undefined,
      };
    case SUCCESSFUL_LOGIN:
      return {
        ...state,
        unsuccessfulLogin: false,
        isLoginInProgress: false
      };
    case UNSUCCESSFUL_LOGIN:
      return {
        ...state,
        unsuccessfulLogin: true,
        isLoginInProgress: false
      };
    case LOGIN_STARTED:
      return {
        ...state,
        isLoginInProgress: true
      }
    default:
      return state;
  }
};

export default loginReducer;
