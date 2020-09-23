import { Property } from "../types/property";

/* Actions */
const SET_PROPERTIES = "SET_PROPERTIES";
const IS_FETCHING_PROPERTIES = "IS_FETCHING_PROPERTIES";
const CURRENT_FAVORITES_BEING_ADDED = "CURRENT_FAVORITES_BEING_ADDED";
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

interface CurrentFavoritesBeingAddedAction {
  type: typeof CURRENT_FAVORITES_BEING_ADDED;
  propertyId: number;
  isCurrentlyAdding: boolean;
}

interface IsAddingCommentAction {
  type: typeof IS_ADDING_COMMENT;
  isAddingComment: boolean;
}

type PropertyActions =
  | SetPropertiesAction
  | IsFetchingPropertiesAction
  | IsAddingCommentAction
  | CurrentFavoritesBeingAddedAction;

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

const isAddingComment = (isAdding: boolean): IsAddingCommentAction => {
  return {
    type: IS_ADDING_COMMENT,
    isAddingComment: isAdding,
  };
};

const currentFavoritesBeingAdded = (
  propertyId: number,
  isCurrentlyAdding: boolean
): CurrentFavoritesBeingAddedAction => {
  return {
    type: CURRENT_FAVORITES_BEING_ADDED,
    propertyId,
    isCurrentlyAdding,
  };
};

export const propertyReducerActions = {
  setProperties,
  isFetchingProperties,
  isAddingComment,
  currentFavoritesBeingAdded,
};

/* State */
export interface PropertyState {
  properties: Property[];
  isFetching: boolean;
  currentFavoritesBeingAdded: number[];
  isAddingComment: boolean;
}

const defaultState: PropertyState = {
  properties: [],
  isFetching: false,
  currentFavoritesBeingAdded: [],
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
    case CURRENT_FAVORITES_BEING_ADDED:
      let updatedFavorites: number[] = [];
      if (!action.isCurrentlyAdding) {
        const indexToRemove = state.currentFavoritesBeingAdded.findIndex(
          (id) => id === action.propertyId
        );
        updatedFavorites = [
          ...state.currentFavoritesBeingAdded.slice(0, indexToRemove),
          ...state.currentFavoritesBeingAdded.slice(
            indexToRemove + 1,
            state.currentFavoritesBeingAdded.length
          ),
        ];
      } else {
        updatedFavorites = [
          ...state.currentFavoritesBeingAdded,
          action.propertyId,
        ];
      }
      return {
        ...state,
        currentFavoritesBeingAdded: updatedFavorites,
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
