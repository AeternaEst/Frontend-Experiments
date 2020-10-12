import { createSelector } from "reselect";
import { State } from "../reducers/root-reducer";

const propertySelector = (state: State) => state.propertyState.properties;

const favoritesSelector = createSelector(propertySelector, (properties) =>
  properties.filter((property) => property.isFavorite)
);

const withCommentsSelector = createSelector(propertySelector, (properties) =>
  properties.filter((property) => property.comments.length)
);

const totalCommentsSelector = createSelector(propertySelector, (properties) =>
  properties.reduce<number>(
    (prev, current) => prev + current.comments.length,
    0
  )
);

export const propertySelectors = {
  properties: propertySelector,
  favorites: favoritesSelector,
  withComments: withCommentsSelector,
  totalComments: totalCommentsSelector,
  isAddingFavorites: (state: State) =>
    !!state.propertyState.currentFavoritesBeingAdded.length,
  favoritesBeingAdded: (state: State) =>
    state.propertyState.currentFavoritesBeingAdded,
  isFetching: (state: State) => state.propertyState.isFetching,
  isAddingComment: (state: State) => state.propertyState.isAddingComment,
  fetchError: (state: State) => state.propertyState.fetchError,
  favoritesError: (state: State) => state.propertyState.favoritesError,
  commentError: (state: State) => state.propertyState.commentError
};
