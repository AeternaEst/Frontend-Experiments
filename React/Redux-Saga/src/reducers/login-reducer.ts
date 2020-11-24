import {
  LoginActions,
  SET_ACTIVE_USER,
  UNSUCCESSFUL_LOGIN,
  CLEAR_ACTIVE_USER,
  SUCCESSFUL_LOGIN,
  LOGIN_STARTED,
  SET_CURRENT_USER_NAME_TYPING,
} from '../actions/login-actions';
import { AppUser } from '../types/app-user';

export interface LoginState {
  activeUser?: AppUser;
  unsuccessfulLogin: boolean;
  isLoginInProgress: boolean;
  currentlyTypedInUserName: string;
}

const defaultState: LoginState = {
  activeUser: undefined,
  unsuccessfulLogin: false,
  isLoginInProgress: false,
  currentlyTypedInUserName: '',
};

const loginReducer = (
  state = defaultState,
  action: LoginActions,
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
        isLoginInProgress: false,
      };
    case UNSUCCESSFUL_LOGIN:
      return {
        ...state,
        unsuccessfulLogin: true,
        isLoginInProgress: false,
      };
    case LOGIN_STARTED:
      return {
        ...state,
        isLoginInProgress: true,
      };
    case SET_CURRENT_USER_NAME_TYPING:
      return {
        ...state,
        currentlyTypedInUserName: action.currentlyTypedInUserName,
      };
    default:
      return state;
  }
};

export default loginReducer;
