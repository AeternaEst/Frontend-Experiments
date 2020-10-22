import { all } from "redux-saga/effects";
import loginSaga from "./login-saga";
import deprecatedSaga from "./app-setup/deprecated-saga";
import propertySaga, { favoriteCounter } from "./property-saga";
import { loggerSaga } from "./logger-saga";

export default function* rootSaga() {
    yield all([
      propertySaga(),
      loginSaga(),
      loggerSaga(),
      favoriteCounter(),
      deprecatedSaga()
    ]);
  }