import { Property } from "../types/property";
import { actionCreator } from "../utils/redux-utils";

export const FETCH_PROPERTIES_SUCCESS = "FETCH_PROPERTIES_SUCCESS";
export const ADD_FAVORITE_PROPERTY_SUCCESS = "ADD_FAVORITE_PROPERTY_SUCCESS";
export const ADD_PROPERTY_COMMENT_SUCCESS = "ADD_PROPERTY_COMMENT_SUCCESS";
export const FETCH_PROPERTIES_REQUEST = "FETCH_PROPERTIES_REQUEST";
export const ADD_FAVORITE_PROPERTY_REQUEST = "ADD_FAVORITE_PROPERTY_REQUEST";
export const ADD_PROPERTY_COMMENT_REQUEST = "ADD_PROPERTY_COMMENT_REQUEST";

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

export type PropertyActions =
  | FetchPropertiesSuccessAction
  | AddPropertyCommentSuccessAction
  | FetchPropertiesRequestAction
  | AddFavoritePropertyRequestAction
  | AddFavoritePropertySuccessAction
  | AddPropertyCommentRequestAction;

const setProperties = (properties: Property[]): FetchPropertiesSuccessAction =>
  actionCreator(FETCH_PROPERTIES_SUCCESS, { properties });

const setAddPropertyCommentSuccess: AddPropertyCommentSuccessAction = actionCreator(
  ADD_PROPERTY_COMMENT_SUCCESS
);

const setAddFavoritePropertySuccess = (
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

export const propertyActions = {
  setProperties,
  setAddPropertyCommentSuccess,
  setAddFavoritePropertySuccess,
  addToFavorite: addFavoritePropertyAction,
  addComment: addPropertyCommentAction,
  fetch: fetchPropertiesRequestAction,
};