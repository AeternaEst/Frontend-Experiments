import { AnyAction } from 'redux';
import { Task } from 'redux-saga';
import {
  put,
  call,
  takeLatest,
  take,
  fork,
  cancel,
  ForkEffect,
  throttle,
} from 'redux-saga/effects';
import {
  LOGIN,
  LoginAction,
  loginActions,
  LOGOUT,
  UNSUCCESSFUL_LOGIN,
  SET_NEW_USER_NAME_TYPING,
  NewUserNameTypingAction,
} from '../actions/login-actions';
import LoginService from '../services/login-service';
import { AppUser } from '../types/app-user';

function* loginUser(loginService: LoginService, userName: string, password: string) {
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
    throw new Error('Error during logout');
  }
}

export function* loginFlow(loginService: LoginService) {
  while (true) {
    const { userName, password }: LoginAction = yield take(LOGIN);
    yield put(loginActions.loginStarted);
    const loginTask: Task = yield fork(loginUser, loginService, userName, password);
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
