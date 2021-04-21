import { all } from "redux-saga/effects";
import deprecatedSaga from "./app-setup/deprecated-saga";
import propertySaga, { favoriteCounter } from "./property-saga";
import userSaga from "./user-saga";
import loginSaga, { loginFlow } from "./login-saga";
import WebApi from "../data/web-api";
import { rootService } from "../data/root-service";

const dataFetcher = FETCH_DATA_FROM_SERVER ? new WebApi() : rootService;

// TODO: enable logger conditionally
export default function* rootSaga() {
  yield all([
    propertySaga(dataFetcher),
    loginFlow(dataFetcher),
    // loggerSaga(),
    favoriteCounter(),
    deprecatedSaga(),
    userSaga(dataFetcher),
    loginSaga(),
  ]);
}
