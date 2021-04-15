import { call, race, put, takeLatest } from "redux-saga/effects";
import { userActions, FETCH_CRITICAL_MESSAGE } from "../actions/user-actions";
import { DataFetcher } from "../data/data-fetcher";

function* fetchCriticalMessage(dataFetcher: DataFetcher) {
  try {
    const criticalMessage: string = yield race([
      call(dataFetcher.getSecurityMessage, 0),
      call(dataFetcher.getSecurityMessage, 1),
      call(dataFetcher.getSecurityMessage, 2),
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

export default function* userSaga(dataFetcher: DataFetcher) {
  yield takeLatest(FETCH_CRITICAL_MESSAGE, fetchCriticalMessage, dataFetcher);
}
