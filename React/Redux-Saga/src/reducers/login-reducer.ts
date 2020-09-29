import { AppUser } from "../types/app-user";
import { actionCreator } from "../utils/redux-utils";

/* Actions */
const SET_ACTIVE_USER = "SET_ACTIVE_USER";
const CLEAR_ACTIVE_USER = "CLEAR_ACTIVE_USER";
const UNSUCCESSFUL_LOGIN = "UNSUCCESSFUL_LOGIN";
const SUCCESSFUL_LOGIN = "SUCCESSFUL_LOGIN";

/* Action types */
interface SetUserAction {
  type: typeof SET_ACTIVE_USER;
  user: AppUser;
}

interface ClearUserAction {
  type: typeof CLEAR_ACTIVE_USER;
}

interface UnsuccessfulLoginAction {
  type: typeof UNSUCCESSFUL_LOGIN;
}

interface SuccessfulLoginAction {
  type: typeof SUCCESSFUL_LOGIN;
}

type LoginActions =
  | SetUserAction
  | ClearUserAction
  | UnsuccessfulLoginAction
  | SuccessfulLoginAction;

/* Action creators */
const setUser = (user: AppUser): SetUserAction =>
  actionCreator(SET_ACTIVE_USER, { user });

const clearUser: ClearUserAction = actionCreator(CLEAR_ACTIVE_USER);

const unsuccessfulLogin: UnsuccessfulLoginAction = actionCreator(
  UNSUCCESSFUL_LOGIN
);

const successfulLogin: SuccessfulLoginAction = actionCreator(SUCCESSFUL_LOGIN);

export const loginReducerActions = {
  setUser: setUser,
  clearUser: clearUser,
  unsuccessfulLogin,
  successfulLogin,
};

/* State */
export interface LoginState {
  activeUser?: AppUser;
  unsuccessfulLogin?: boolean;
}

const defaultState: LoginState = {
  activeUser: undefined,
  unsuccessfulLogin: false,
};

/* Reducer */
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
    case UNSUCCESSFUL_LOGIN:
      return {
        ...state,
        unsuccessfulLogin: true,
      };
    case SUCCESSFUL_LOGIN:
      return {
        ...state,
        unsuccessfulLogin: false,
      };
    default:
      return state;
  }
};

export default loginReducer;
