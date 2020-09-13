import { all } from "redux-saga/effects";
import loginSaga from "./login-saga";
import deprecatedSaga from "./app-setup/deprecated-saga";

export default function* rootSaga() {
    yield all([
      loginSaga(),
      deprecatedSaga()
    ]);
  }