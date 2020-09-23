import { put, takeEvery, takeLatest, select } from "redux-saga/effects";
import PropertyService from "../services/property-service";
import { propertyReducerActions } from "../reducers/property-reducer";
import { State } from "../reducers/root-reducer";

/* Actions */
export const FETCH_PROPERTIES_REQUEST = "FETCH_PROPERTIES_REQUEST";
export const ADD_FAVORITE_PROPERTY_REQUEST = "ADD_FAVORITE_PROPERTY_REQUEST";
export const ADD_PROPERTY_COMMENT_REQUEST = "ADD_PROPERTY_COMMENT_REQUEST";

/* Action types */
export interface FetchPropertiesRequestAction {
  type: typeof FETCH_PROPERTIES_REQUEST;
}

export interface AddFavoritePropertyRequestAction {
  type: typeof ADD_FAVORITE_PROPERTY_REQUEST;
  propertyId: number;
}

export interface AddPropertyCommentRequestAction {
  type: typeof ADD_PROPERTY_COMMENT_REQUEST;
  propertyId: number;
  comment: string;
}

/* Action creators*/
const addFavoritePropertyAction = (
  propertyId: number
): AddFavoritePropertyRequestAction => {
  return {
    type: ADD_FAVORITE_PROPERTY_REQUEST,
    propertyId,
  };
};

const addPropertyCommentAction = (
  propertyId: number,
  comment: string
): AddPropertyCommentRequestAction => {
  return {
    type: ADD_PROPERTY_COMMENT_REQUEST,
    propertyId,
    comment,
  };
};

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
    yield put(propertyReducerActions.setAddFavoritePropertySuccess(action.propertyId));
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
