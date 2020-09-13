import { AnyAction } from "redux";
import { AppUser } from "../types/app-user";

/* Actions */
const SET_ACTIVE_USER = "SET_ACTIVE_USER";
const CLEAR_ACTIVE_USER = "CLEAR_ACTIVE_USER";

/* Action types */
interface SetUserAction {
    type: typeof SET_ACTIVE_USER
    user: AppUser;
}

interface ClearUserAction {
  type: typeof CLEAR_ACTIVE_USER
}

type LoginActions = SetUserAction | ClearUserAction;

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

/* State */
export interface LoginState {
  activeUser?: AppUser
}

const defaultState: LoginState = {
  activeUser: undefined,
};

/* Reducer */
const loginReducer = (
  state = defaultState,
  action: LoginActions
): LoginState => {
  switch (action.type) {
    case SET_ACTIVE_USER:
      return {
        activeUser: action.user,
      };
    case CLEAR_ACTIVE_USER:
      return {
        activeUser: undefined,
      };
    default:
      return state;
  }
};

export default loginReducer;
