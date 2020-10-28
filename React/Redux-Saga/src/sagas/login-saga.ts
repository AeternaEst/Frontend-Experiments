import { AnyAction } from "redux";
import { Task } from "redux-saga";
import { put, call, takeLatest, take, fork, cancel, ForkEffect } from "redux-saga/effects";
import {
  LOGIN,
  LoginAction,
  loginActions,
  LOGOUT,
  LogoutAction,
  UNSUCCESSFUL_LOGIN,
} from "../actions/login-actions";
import LoginService from "../services/login-service";
import { AppUser } from "../types/app-user";

const loginService = new LoginService();

function* loginUser(userName: string, password: string) {
  try {
    const user: AppUser = yield call(loginService.login, userName, password);
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

function* loginFlow() {
  while (true) {
    const { userName, password }: LoginAction = yield take(LOGIN);
    yield put(loginActions.loginStarted);
    const loginTask: Task = yield fork(loginUser, userName, password);
    const action: AnyAction = yield take([LOGOUT, UNSUCCESSFUL_LOGIN]);
    if(action.type === LOGOUT && loginTask.isRunning()) {
      cancel(loginTask)
    }
    yield logoutUser();
  }
}

export default loginFlow;
