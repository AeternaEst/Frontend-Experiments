import { AppUser } from "../types/app-user";
import { actionCreator } from "../utils/redux-utils";

export const SET_ACTIVE_USER = "SET_ACTIVE_USER";
export const CLEAR_ACTIVE_USER = "CLEAR_ACTIVE_USER";
export const UNSUCCESSFUL_LOGIN = "UNSUCCESSFUL_LOGIN";
export const SUCCESSFUL_LOGIN = "SUCCESSFUL_LOGIN";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export interface SetUserAction {
    type: typeof SET_ACTIVE_USER;
    user: AppUser;
  }
  
export interface ClearUserAction {
    type: typeof CLEAR_ACTIVE_USER;
  }
  
export interface UnsuccessfulLoginAction {
    type: typeof UNSUCCESSFUL_LOGIN;
  }
  
export interface SuccessfulLoginAction {
    type: typeof SUCCESSFUL_LOGIN;
  }

export interface LoginAction {
    type: typeof LOGIN;
    userName: string;
    password: string;
  }
  
export interface LogoutAction {
    type: typeof LOGOUT;
  }
  
export type LoginActions =
    | SetUserAction
    | ClearUserAction
    | UnsuccessfulLoginAction
    | SuccessfulLoginAction
    | LoginAction
    | LogoutAction;

const setUser = (user: AppUser): SetUserAction => actionCreator(SET_ACTIVE_USER, { user });

const clearUser: ClearUserAction = actionCreator(CLEAR_ACTIVE_USER);

const unsuccessfulLogin: UnsuccessfulLoginAction = actionCreator(
    UNSUCCESSFUL_LOGIN
);

const successfulLogin: SuccessfulLoginAction = actionCreator(SUCCESSFUL_LOGIN);

const loginAction = (userName: string, password: string): LoginAction =>
    actionCreator(LOGIN, { userName, password });
  
const logoutAction: LogoutAction = actionCreator(LOGOUT);

export const loginActions = {
    setUser: setUser,
    clearUser: clearUser,
    unsuccessfulLogin,
    successfulLogin,
    login: loginAction,
    logout: logoutAction,
};