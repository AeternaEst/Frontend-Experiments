import { put, takeEvery, takeLatest, select } from "redux-saga/effects";
import PropertyService from "../services/property-service";
import { propertyReducerActions } from "../reducers/property-reducer";
import { State } from "../reducers/root-reducer";
import { actionCreator } from "../utils/redux-utils";
import {
  FETCH_PROPERTIES_REQUEST,
  ADD_FAVORITE_PROPERTY_REQUEST,
  ADD_PROPERTY_COMMENT_REQUEST,
  AddFavoritePropertyRequestAction,
  AddPropertyCommentRequestAction,
  FetchPropertiesRequestAction,
} from "../actions/property-actions";

/* Action creators*/
const addFavoritePropertyAction = (
  propertyId: number
): AddFavoritePropertyRequestAction =>
  actionCreator(ADD_FAVORITE_PROPERTY_REQUEST, { propertyId });

const addPropertyCommentAction = (
  propertyId: number,
  comment: string
): AddPropertyCommentRequestAction =>
  actionCreator(ADD_PROPERTY_COMMENT_REQUEST, { propertyId, comment });

const fetchPropertiesRequestAction: FetchPropertiesRequestAction = {
  type: FETCH_PROPERTIES_REQUEST,
};

export const propertyActions = {
  addToFavorite: addFavoritePropertyAction,
  addComment: addPropertyCommentAction,
  fetch: fetchPropertiesRequestAction,
};

const propertyService = new PropertyService();

/* Saga actions */
function* fetchProperties() {
  try {
    const properties = yield propertyService.getProperties();
    yield put(propertyReducerActions.setProperties(properties));
  } catch (e) {
    throw new Error("Error fetching properties");
  }
}

function* addFavoriteProperty(action: AddFavoritePropertyRequestAction) {
  try {
    yield propertyService.addToFavorite(action.propertyId);
    yield put(propertyActions.fetch);
    yield put(
      propertyReducerActions.setAddFavoritePropertySuccess(action.propertyId)
    );
  } catch (e) {
    throw new Error("Error adding favorite property");
  }
}

function* addPropertyComment(action: AddPropertyCommentRequestAction) {
  try {
    const user = yield select((state: State) => state.loginState.activeUser);
    yield propertyService.addComment(action.propertyId, {
      text: action.comment,
      user: user,
    });
    yield put(propertyActions.fetch);
    yield put(propertyReducerActions.setAddPropertyCommentSuccess);
  } catch (e) {
    throw new Error("Error adding property comment");
  }
}

function* propertySaga() {
  yield takeEvery(FETCH_PROPERTIES_REQUEST, fetchProperties);
  yield takeEvery(ADD_FAVORITE_PROPERTY_REQUEST, addFavoriteProperty);
  yield takeEvery(ADD_PROPERTY_COMMENT_REQUEST, addPropertyComment);
}

export default propertySaga;
