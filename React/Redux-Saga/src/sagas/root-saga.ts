import { all } from "redux-saga/effects";
import loginFlow from "./login-saga";
import deprecatedSaga from "./app-setup/deprecated-saga";
import propertySaga, { favoriteCounter } from "./property-saga";
import { loggerSaga } from "./logger-saga";

export default function* rootSaga() {
  yield all([
    propertySaga(),
    loginFlow(),
    loggerSaga(),
    favoriteCounter(),
    deprecatedSaga(),
  ]);
}
