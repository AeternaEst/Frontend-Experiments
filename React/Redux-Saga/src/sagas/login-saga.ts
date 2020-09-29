import { put, takeEvery, takeLatest } from "redux-saga/effects";
import { AnyAction } from "redux";
import LoginService from "../services/login-service";
import { loginReducerActions } from "../reducers/login-reducer";
import { actionCreator } from "../utils/redux-utils";

/* Actions */
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

/* Action types */
interface LoginAction {
  type: typeof LOGIN;
  userName: string;
  password: string;
}

interface LogoutAction {
  type: typeof LOGOUT;
}

/* Action creators*/
const loginAction = (userName: string, password: string): LoginAction =>
  actionCreator(LOGIN, { userName, password });

const logoutAction: LogoutAction = actionCreator(LOGOUT);

export const loginActions = {
  login: loginAction,
  logout: logoutAction,
};

const loginService = new LoginService();

/* Saga actions */
function* login(action: LoginAction) {
  try {
    const user = yield loginService.login(action.userName, action.password);
    yield put(loginReducerActions.successfulLogin);
    yield put(loginReducerActions.setUser(user));
  } catch (e) {
    yield put(loginReducerActions.unsuccessfulLogin);
  }
}

function* logout(action: LogoutAction) {
  try {
    yield put(loginReducerActions.clearUser);
  } catch (e) {
    throw new Error("Error during logout");
  }
}

function* loginSaga() {
  yield takeEvery(LOGIN, login);
  yield takeEvery(LOGOUT, logout);
}

export default loginSaga;
