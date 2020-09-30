import { Property } from "../types/property";

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
