import React, { FC, useState } from "react";
import { Property } from "../types/property";
import { triggerAndSubscribe } from "../utils/react-redux-utils";
import { propertyActions } from "../actions/property-actions";
import { propertySelectors } from "../selectors/property-selectors";
import Loader from "./widgets/loader";
import Error from "./widgets/error";

interface PropertyProps {
  property: Property;
}

const Property: FC<PropertyProps> = (props: PropertyProps) => {
  const [comment, setComment] = useState("");
  const {
    data: favoritesBeingAdded,
    trigger: addToFavorite,
    error: favoritesError,
  } = triggerAndSubscribe(
    propertyActions.addToFavorite(props.property.id),
    propertySelectors.favoritesBeingAdded,
    propertySelectors.favoritesError
  );
  const {
    data: isAddingComment,
    trigger: addComment,
    error: commentError,
  } = triggerAndSubscribe(
    propertyActions.addComment(props.property.id, comment),
    propertySelectors.isAddingComment,
    propertySelectors.commentError
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
          <>
            <button type="button" onClick={() => addToFavorite()}>
              {isLoading ? <Loader text="updating" /> : "Add to favorites"}
            </button>
            {favoritesError && <Error error={favoritesError} smallDisplay />}
          </>
        )}
        {props.property.isFavorite && <span>Is favorite</span>}
        <div>
          <textarea
            onChange={(event) => setComment(event.currentTarget.value)}
            rows={3}
            value={comment}
            placeholder="comment property"
          />
          {commentError && <Error error={commentError} smallDisplay />}
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
