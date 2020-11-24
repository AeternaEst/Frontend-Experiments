import { all } from 'redux-saga/effects';
import deprecatedSaga from './app-setup/deprecated-saga';
import propertySaga, { favoriteCounter } from './property-saga';
import loggerSaga from './logger-saga';
import userSaga from './user-saga';
import loginSaga, { loginFlow } from './login-saga';
import webApi from '../web-api';

// TODO: enable logger conditionally
export default function* rootSaga() {
  yield all([
    propertySaga(webApi.propertyService),
    loginFlow(webApi.loginService),
    // loggerSaga(),
    favoriteCounter(),
    deprecatedSaga(),
    userSaga(webApi.userService),
    loginSaga(),
  ]);
}
