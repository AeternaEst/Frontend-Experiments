import { put, call, takeLatest } from "redux-saga/effects";
import {
  LOGIN,
  LoginAction,
  loginActions,
  LOGOUT,
  LogoutAction,
} from "../actions/login-actions";
import LoginService from "../services/login-service";

const loginService = new LoginService();

/* Saga actions */
function* login(action: LoginAction) {
  try {
    const user = yield call(
      loginService.login,
      action.userName,
      action.password
    );
    yield put(loginActions.successfulLogin);
    yield put(loginActions.setUser(user));
  } catch (e) {
    yield put(loginActions.unsuccessfulLogin);
  }
}

function* logout(action: LogoutAction) {
  try {
    yield put(loginActions.clearUser);
  } catch (e) {
    throw new Error("Error during logout");
  }
}

function* loginSaga() {
  yield takeLatest(LOGIN, login);
  yield takeLatest(LOGOUT, logout);
}

export default loginSaga;
