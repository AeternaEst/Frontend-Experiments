import { put, call, takeLatest, take, fork } from "redux-saga/effects";
import {
  LOGIN,
  LoginAction,
  loginActions,
  LOGOUT,
  LogoutAction,
  UNSUCCESSFUL_LOGIN,
} from "../actions/login-actions";
import LoginService from "../services/login-service";

const loginService = new LoginService();

function* loginUser(userName: string, password: string) {
  try {
    const user = yield call(loginService.login, userName, password);
    yield put(loginActions.successfulLogin);
    yield put(loginActions.setUser(user));
    return user;
  } catch (e) {
    yield put(loginActions.unsuccessfulLogin);
  }
}

function* logoutUser() {
  try {
    yield put(loginActions.clearUser);
  } catch (e) {
    throw new Error("Error during logout");
  }
}

/*
  TODO: Add spinner during login/logout
        Add better typings -> user = any
        add cancel action for logout during login
*/
function* loginFlow() {
  while (true) {
    const { userName, password } = yield (take(
      LOGIN
    ) as unknown) as LoginAction;
    yield fork(loginUser, userName, password);
    yield take([LOGOUT, UNSUCCESSFUL_LOGIN]);
    yield logoutUser();
  }
}

export default loginFlow;
