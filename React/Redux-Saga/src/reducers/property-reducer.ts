import { Property } from "../types/property";

/* Actions */
const SET_PROPERTIES = "SET_PROPERTIES";
const IS_FETCHING_PROPERTIES = "IS_FETCHING_PROPERTIES";
const IS_ADDING_FAVORITE = "IS_ADDING_FAVORITE";
const IS_ADDING_COMMENT = "IS_ADDING_COMMENT";

/* Action types */
interface SetPropertiesAction {
  type: typeof SET_PROPERTIES;
  properties: Property[];
}

interface IsFetchingPropertiesAction {
  type: typeof IS_FETCHING_PROPERTIES;
  isFetching: boolean;
}

interface IsAddingFavoriteAction {
  type: typeof IS_ADDING_FAVORITE;
  isAddingFavorite: boolean;
}

interface IsAddingCommentAction {
  type: typeof IS_ADDING_COMMENT;
  isAddingComment: boolean;
}

type PropertyActions =
  | SetPropertiesAction
  | IsFetchingPropertiesAction
  | IsAddingCommentAction
  | IsAddingFavoriteAction;

/* Action creators */
const setProperties = (properties: Property[]): SetPropertiesAction => {
  return {
    type: SET_PROPERTIES,
    properties,
  };
};

const isFetchingProperties = (
  isFetching: boolean
): IsFetchingPropertiesAction => {
  return {
    type: IS_FETCHING_PROPERTIES,
    isFetching,
  };
};

const isAdding = (
  addType: IsAddingFavoriteAction["type"] | IsAddingCommentAction["type"],
  isAdding: boolean
): IsAddingCommentAction | IsAddingFavoriteAction => {
  if (addType === IS_ADDING_FAVORITE) {
    return {
      type: IS_ADDING_FAVORITE,
      isAddingFavorite: isAdding,
    };
  }
  if (addType === IS_ADDING_COMMENT) {
    return {
      type: IS_ADDING_COMMENT,
      isAddingComment: isAdding,
    };
  }
};

export const propertyReducerActions = {
  setProperties,
  isFetchingProperties,
  isAdding,
};

/* State */
export interface PropertyState {
  properties: Property[];
  isFetching: boolean;
  isAddingFavorite: boolean;
  isAddingComment: boolean;
}

const defaultState: PropertyState = {
  properties: [],
  isFetching: false,
  isAddingFavorite: false,
  isAddingComment: false,
};

/* Reducer */
const propertyReducer = (
  state = defaultState,
  action: PropertyActions
): PropertyState => {
  switch (action.type) {
    case SET_PROPERTIES:
      return {
        ...state,
        properties: [...action.properties],
      };
    case IS_FETCHING_PROPERTIES:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case IS_ADDING_FAVORITE:
      return {
        ...state,
        isAddingFavorite: action.isAddingFavorite,
      };
    case IS_ADDING_COMMENT:
      return {
        ...state,
        isAddingComment: action.isAddingComment,
      };
    default:
      return state;
  }
};

export default propertyReducer;
