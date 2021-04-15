import { call, race, put, takeLatest } from "redux-saga/effects";
import { userActions, FETCH_CRITICAL_MESSAGE } from "../actions/user-actions";
import WebApi from "../web-api";

function* fetchCriticalMessage(webApi: WebApi) {
  try {
    const criticalMessage: string = yield race([
      call(webApi.getSecurityMessage, 0),
      call(webApi.getSecurityMessage, 1),
      call(webApi.getSecurityMessage, 2),
    ]);
    yield put(userActions.fetchCriticalMessageSuccessAction(criticalMessage));
  } catch {
    yield put(
      userActions.fetchCriticalMessageFailureAction(
        "Unable to get critical message"
      )
    );
  }
}

export default function* userSaga(webApi: WebApi) {
  yield takeLatest(FETCH_CRITICAL_MESSAGE, fetchCriticalMessage, webApi);
}
