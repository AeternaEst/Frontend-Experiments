import React, { PureComponent, FC, useState } from "react";
import { Property } from "../types/property";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./loader";
import { State } from "../reducers/root-reducer";
import { propertyActions } from "../actions/property-actions";

interface PropertyProps {
  property: Property;
}

const Property: FC<PropertyProps> = (props: PropertyProps) => {
  const [comment, setComment] = useState("");
  const favoritesBeingAdded = useSelector(
    (state: State) => state.propertyState.currentFavoritesBeingAdded
  );
  const isAddingComment = useSelector(
    (state: State) => state.propertyState.isAddingComment
  );
  const dispatch = useDispatch();

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
          <button
            type="button"
            onClick={() =>
              dispatch(propertyActions.addToFavorite(props.property.id))
            }
          >
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
              dispatch(propertyActions.addComment(props.property.id, comment));
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
