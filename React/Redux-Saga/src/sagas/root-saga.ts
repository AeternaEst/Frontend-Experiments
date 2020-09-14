import { all } from "redux-saga/effects";
import loginSaga from "./login-saga";
import deprecatedSaga from "./app-setup/deprecated-saga";
import propertySaga from "./property-saga";

export default function* rootSaga() {
    yield all([
      propertySaga(),
      loginSaga(),
      deprecatedSaga()
    ]);
  }