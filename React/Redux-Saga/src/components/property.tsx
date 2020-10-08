import React, { FC, useState } from "react";
import { Property } from "../types/property";
import Loader from "./loader";
import { State } from "../reducers/root-reducer";
import { triggerAndSubscribe } from "../utils/react-redux-utils";
import { propertyActions } from "../actions/property-actions";

interface PropertyProps {
  property: Property;
}

const Property: FC<PropertyProps> = (props: PropertyProps) => {
  const [comment, setComment] = useState("");
  const {
    data: favoritesBeingAdded,
    trigger: addToFavorite,
  } = triggerAndSubscribe(
    propertyActions.addToFavorite(props.property.id),
    (state: State) => state.propertyState.currentFavoritesBeingAdded
  );
  const { data: isAddingComment, trigger: addComment } = triggerAndSubscribe(
    propertyActions.addComment(props.property.id, comment),
    (state: State) => state.propertyState.isAddingComment
  );

  const isLoading = favoritesBeingAdded.includes(props.property.id);

  return (
    <div className="property">
      <img src={props.property.imageUrl} />
      <div>
        <b>{props.property.address}</b>
      </div>
      <p>{props.property.description}</p>
      <div className="property__actions">
        {!props.property.isFavorite && (
          <button type="button" onClick={() => addToFavorite()}>
            {isLoading ? <Loader text="updating" /> : "Add to favorites"}
          </button>
        )}
        {props.property.isFavorite && <span>Is favorite</span>}
        <div>
          <textarea
            onChange={(event) => setComment(event.currentTarget.value)}
            rows={3}
            value={comment}
            placeholder="comment property"
          />
          <button
            onClick={() => {
              setComment("");
              addComment();
            }}
          >
            {isAddingComment ? <Loader text="updating" /> : "Submit Comment"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Property;
