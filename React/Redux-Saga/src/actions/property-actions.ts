import { AppError } from "../types/app-error";
import { Property, PropertyAddress } from "../types/property";
import { actionCreator } from "../utils/redux-utils";

export const FETCH_PROPERTIES_SUCCESS = "FETCH_PROPERTIES_SUCCESS";
export const ADD_FAVORITE_PROPERTY_SUCCESS = "ADD_FAVORITE_PROPERTY_SUCCESS";
export const ADD_PROPERTY_COMMENT_SUCCESS = "ADD_PROPERTY_COMMENT_SUCCESS";
export const FETCH_PROPERTIES_REQUEST = "FETCH_PROPERTIES_REQUEST";
export const ADD_FAVORITE_PROPERTY_REQUEST = "ADD_FAVORITE_PROPERTY_REQUEST";
export const ADD_PROPERTY_COMMENT_REQUEST = "ADD_PROPERTY_COMMENT_REQUEST";
export const ADD_FAVORITE_PROPERTY_ERROR = "ADD_FAVORITE_PROPERTY_ERROR";
export const FETCH_PROPERTIES_ERROR = "FETCH_PROPERTIES_ERROR";
export const ADD_PROPERTY_COMMENT_ERROR = "ADD_PROPERTY_COMMENT_ERROR";
export const ADD_FAVORITE_PROPERTY_MESSAGE = "ADD_FAVORITE_PROPERTY_MESSAGE";
export const GET_PROPERTY_ADDRESS = "GET_PROPERTY_ADDRESS";
export const GET_PROPERTY_ADDRESS_SUCCESS = "GET_PROPERTY_ADDRESS_SUCCESS";
export const GET_PROPERTY_ADDRESS_FAILURE = "GET_PROPERTY_ADDRESS_FAILURE";

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

export interface FetchPropertiesSuccessAction {
  type: typeof FETCH_PROPERTIES_SUCCESS;
  properties: Property[];
}

export interface AddPropertyCommentSuccessAction {
  type: typeof ADD_PROPERTY_COMMENT_SUCCESS;
}

export interface AddFavoritePropertySuccessAction {
  type: typeof ADD_FAVORITE_PROPERTY_SUCCESS;
  propertyId: number;
}

export interface FetchPropertiesErrorAction {
  type: typeof FETCH_PROPERTIES_ERROR;
  error: AppError;
}

export interface AddFavoritePropertyErrorAction {
  type: typeof ADD_FAVORITE_PROPERTY_ERROR;
  error: AppError;
}

export interface AddPropertyCommentErrorAction {
  type: typeof ADD_PROPERTY_COMMENT_ERROR;
  error: AppError;
}

export interface AddFavoritePropertyMessageAction {
  type: typeof ADD_FAVORITE_PROPERTY_MESSAGE;
}

export interface GetAddressAction {
  type: typeof GET_PROPERTY_ADDRESS;
  propertyId: number;
}

export interface GetAddressSuccessAction {
  type: typeof GET_PROPERTY_ADDRESS_SUCCESS;
  propertyId: number;
  address: PropertyAddress;
}

export interface GetAddressFailureAction {
  type: typeof GET_PROPERTY_ADDRESS_FAILURE;
  propertyId: number;
}

export type PropertyActions =
  | FetchPropertiesSuccessAction
  | AddPropertyCommentSuccessAction
  | FetchPropertiesRequestAction
  | AddFavoritePropertyRequestAction
  | AddFavoritePropertySuccessAction
  | AddPropertyCommentRequestAction
  | FetchPropertiesErrorAction
  | AddFavoritePropertyErrorAction
  | AddPropertyCommentErrorAction
  | AddFavoritePropertyMessageAction
  | GetAddressAction
  | GetAddressSuccessAction
  | GetAddressFailureAction;

const setPropertiesAction = (
  properties: Property[]
): FetchPropertiesSuccessAction =>
  actionCreator(FETCH_PROPERTIES_SUCCESS, { properties });

const setAddPropertyCommentSuccessAction: AddPropertyCommentSuccessAction = actionCreator(
  ADD_PROPERTY_COMMENT_SUCCESS
);

const setAddFavoritePropertySuccessAction = (
  propertyId: number
): AddFavoritePropertySuccessAction =>
  actionCreator(ADD_FAVORITE_PROPERTY_SUCCESS, { propertyId });

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

const setAddPropertyCommentErrorAction = (
  error: AppError
): AddPropertyCommentErrorAction =>
  actionCreator(ADD_PROPERTY_COMMENT_ERROR, { error });

const addFavoritePropertyErrorAction = (
  error: AppError
): AddFavoritePropertyErrorAction =>
  actionCreator(ADD_FAVORITE_PROPERTY_ERROR, { error });

const fetchPropertiesErrorAction = (
  error: AppError
): FetchPropertiesErrorAction =>
  actionCreator(FETCH_PROPERTIES_ERROR, { error });

const addFavoritePropertyMessageAction = (): AddFavoritePropertyMessageAction =>
  actionCreator(ADD_FAVORITE_PROPERTY_MESSAGE);

const getAddressAction = (propertyId: number): GetAddressAction =>
  actionCreator(GET_PROPERTY_ADDRESS, { propertyId });

const getAddressSuccessAction = (
  propertyId: number,
  address: PropertyAddress
): GetAddressSuccessAction =>
  actionCreator(GET_PROPERTY_ADDRESS_SUCCESS, { propertyId, address });

const getAddressFailureAction = (propertyId: number): GetAddressFailureAction =>
  actionCreator(GET_PROPERTY_ADDRESS_FAILURE, { propertyId });

export const propertyActions = {
  setPropertiesAction,
  setAddPropertyCommentSuccessAction,
  setAddFavoritePropertySuccessAction,
  addToFavorite: addFavoritePropertyAction,
  addComment: addPropertyCommentAction,
  fetch: fetchPropertiesRequestAction,
  setAddPropertyCommentErrorAction,
  addFavoritePropertyErrorAction,
  fetchPropertiesErrorAction,
  addFavoritePropertyMessageAction,
  getAddressAction,
  getAddressSuccessAction,
  getAddressFailureAction,
};
