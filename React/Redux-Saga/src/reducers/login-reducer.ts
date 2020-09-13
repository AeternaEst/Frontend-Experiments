import { AnyAction } from "redux";
import { AppUser } from "../types/app-user";

/* Actions */
const SET_ACTIVE_USER = "SET_ACTIVE_USER";
const CLEAR_ACTIVE_USER = "CLEAR_ACTIVE_USER";

/* Action types */
interface SetUserAction extends AnyAction {
    user: AppUser;
}

interface ClearUserAction extends AnyAction {}

type LoginActionTypes = SetUserAction | ClearUserAction;

/* Action creators */
const setUser = (user: AppUser): SetUserAction => {
  return {
    type: SET_ACTIVE_USER,
    user: user,
  };
};

const clearUser: ClearUserAction = {
  type: CLEAR_ACTIVE_USER,
};

export const loginReducerActions = {
  setUser: setUser,
  clearUser: clearUser,
};

export interface LoginState {
  activeUser?: AppUser
}

const defaultState: LoginState = {
  activeUser: undefined,
};

const loginReducer = (
  state = defaultState,
  action: LoginActionTypes
) => {
  switch (action.type) {
    case SET_ACTIVE_USER:
      return {
        user: action.user,
      };
    case CLEAR_ACTIVE_USER:
      return {
        user: undefined,
      };
    default:
      return state;
  }
};

export default loginReducer;
