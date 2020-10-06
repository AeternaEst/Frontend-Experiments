import { LoginActions, SET_ACTIVE_USER, UNSUCCESSFUL_LOGIN } from "../actions/login-actions";
import { AppUser } from "../types/app-user";

export interface LoginState {
  activeUser?: AppUser;
  unsuccessfulLogin?: boolean;
}

const defaultState: LoginState = {
  activeUser: undefined,
  unsuccessfulLogin: false,
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
    case SET_ACTIVE_USER:
      return {
        ...state,
        activeUser: undefined,
      };
    case UNSUCCESSFUL_LOGIN:
      return {
        ...state,
        unsuccessfulLogin: true,
      };
    case UNSUCCESSFUL_LOGIN:
      return {
        ...state,
        unsuccessfulLogin: false,
      };
    default:
      return state;
  }
};

export default loginReducer;
