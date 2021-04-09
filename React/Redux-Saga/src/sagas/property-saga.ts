import {
  put,
  takeEvery,
  select,
  takeLatest,
  call,
  take,
  all,
} from "redux-saga/effects";
import { State } from "../reducers/root-reducer";
import {
  FETCH_PROPERTIES_REQUEST,
  ADD_FAVORITE_PROPERTY_REQUEST,
  ADD_PROPERTY_COMMENT_REQUEST,
  AddFavoritePropertyRequestAction,
  AddPropertyCommentRequestAction,
  propertyActions,
  GetAddressAction,
  GET_PROPERTY_ADDRESS,
} from "../actions/property-actions";
import { AppError, ErrorCode } from "../types/app-error";
import { AppUser } from "../types/app-user";
import { Property } from "../types/property";
import WebApi from "../web-api";

/* Saga actions */
export function* fetchProperties(webApi: WebApi) {
  try {
    const response: Property[] = yield call(webApi.getProperties);
    yield put(propertyActions.setPropertiesAction(response));
  } catch (e) {
    yield put(
      propertyActions.fetchPropertiesErrorAction(
        new AppError(
          "fetchProperties",
          "Error fetching properties",
          ErrorCode.FETCH_PROPERTIES_ERROR
        )
      )
    );
  }
}

export function* addFavoriteProperty(
  webApi: WebApi,
  action: AddFavoritePropertyRequestAction
) {
  try {
    yield call(webApi.addFavoriteProperty, action.propertyId);
    yield put(propertyActions.fetch);
    yield put(
      propertyActions.setAddFavoritePropertySuccessAction(action.propertyId)
    );
  } catch (e) {
    yield put(
      propertyActions.addFavoritePropertyErrorAction(
        new AppError(
          "addFavoriteProperty",
          "Error adding favorite",
          ErrorCode.ADD_FAVORITES_ERROR
        )
      )
    );
  }
}

export function* addPropertyComment(
  webApi: WebApi,
  action: AddPropertyCommentRequestAction
) {
  try {
    const user: AppUser = yield select(
      (state: State) => state.loginState.activeUser
    );
    yield call(webApi.addPropertyComment, action.propertyId, {
      text: action.comment,
      user,
    });
    yield put(propertyActions.fetch);
    yield put(propertyActions.setAddPropertyCommentSuccessAction);
  } catch (e) {
    yield put(
      propertyActions.setAddPropertyCommentErrorAction(
        new AppError(
          "addPropertyComment",
          "Error adding comment",
          ErrorCode.ADD_COMMENT_ERROR
        )
      )
    );
  }
}

export function* favoriteCounter() {
  for (let i = 0; i < 3; i += 1) {
    yield take(ADD_FAVORITE_PROPERTY_REQUEST);
    console.log("favorite actions received: ", i);
  }
  yield put(propertyActions.addFavoritePropertyMessageAction());
}

export function* getAddress(webApi: WebApi, action: GetAddressAction) {
  try {
    const [streetName, city, zip]: string[] = yield all([
      call(webApi.getStreetName, action.propertyId),
      call(webApi.getCity, action.propertyId),
      call(webApi.getZip, action.propertyId),
    ]);
    yield put(
      propertyActions.getAddressSuccessAction(action.propertyId, {
        streetName,
        propertyId: action.propertyId,
        city,
        zipCode: zip,
      })
    );
  } catch {
    yield put(propertyActions.getAddressFailureAction(action.propertyId));
  }
}

function* propertySaga(webApi: WebApi) {
  yield takeLatest(FETCH_PROPERTIES_REQUEST, fetchProperties, webApi);
  yield takeEvery(ADD_FAVORITE_PROPERTY_REQUEST, addFavoriteProperty, webApi);
  yield takeEvery(ADD_PROPERTY_COMMENT_REQUEST, addPropertyComment, webApi);
  yield takeEvery(GET_PROPERTY_ADDRESS, getAddress, webApi);
}

export default propertySaga;
