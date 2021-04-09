import { AnyAction } from "redux";
import { Task } from "redux-saga";
import { put, call, take, fork, cancel, throttle } from "redux-saga/effects";
import {
  LOGIN,
  LoginAction,
  loginActions,
  LOGOUT,
  UNSUCCESSFUL_LOGIN,
  SET_NEW_USER_NAME_TYPING,
  NewUserNameTypingAction,
} from "../actions/login-actions";
import { AppUser } from "../types/app-user";
import WebApi from "../web-api";

function* loginUser(webApi: WebApi, userName: string, password: string) {
  try {
    const user: AppUser = yield call(webApi.login, userName, password);
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

export function* loginFlow(webApi: WebApi) {
  while (true) {
    const { userName, password }: LoginAction = yield take(LOGIN);
    yield put(loginActions.loginStarted);
    const loginTask: Task = yield fork(loginUser, webApi, userName, password);
    const action: AnyAction = yield take([LOGOUT, UNSUCCESSFUL_LOGIN]);
    if (action.type === LOGOUT && loginTask.isRunning()) {
      cancel(loginTask);
    }
    yield logoutUser();
  }
}

function* loginUserNameCapture(action: NewUserNameTypingAction) {
  yield put(loginActions.currentUserNameTyping(action.newTypedInUserName));
}

function* loginSaga() {
  yield throttle(2000, SET_NEW_USER_NAME_TYPING, loginUserNameCapture);
}

export default loginSaga;
