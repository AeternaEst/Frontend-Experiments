import { all } from "redux-saga/effects";
import deprecatedSaga from "./app-setup/deprecated-saga";
import propertySaga, { favoriteCounter } from "./property-saga";
import userSaga from "./user-saga";
import loginSaga, { loginFlow } from "./login-saga";
import WebApi from "../web-api";

const webApi = new WebApi();

// TODO: enable logger conditionally
export default function* rootSaga() {
  console.log("root saga");

  yield all([
    propertySaga(webApi),
    loginFlow(webApi),
    // loggerSaga(),
    favoriteCounter(),
    deprecatedSaga(),
    userSaga(webApi),
    loginSaga(),
  ]);
}
