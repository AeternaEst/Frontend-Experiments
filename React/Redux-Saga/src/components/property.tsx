import React, { FC, useState } from 'react';
import { Property as AppProperty } from '../types/property';
import {
  triggerAndSubscribe,
  fetchAndSubscribe,
} from '../utils/react-redux-utils';
import { propertyActions } from '../actions/property-actions';
import propertySelectors from '../selectors/property-selectors';
import Loader from './widgets/loader';
import Error from './widgets/error';

interface PropertyProps {
  property: AppProperty;
}

const Property: FC<PropertyProps> = ({ property }) => {
  const [comment, setComment] = useState('');
  const {
    data: favoritesBeingAdded,
    trigger: addToFavorite,
    error: favoritesError,
  } = triggerAndSubscribe(
    propertyActions.addToFavorite(property.id),
    propertySelectors.favoritesBeingAdded,
    propertySelectors.favoritesError,
  );
  const {
    data: isAddingComment,
    trigger: addComment,
    error: commentError,
  } = triggerAndSubscribe(
    propertyActions.addComment(property.id, comment),
    propertySelectors.isAddingComment,
    propertySelectors.commentError,
  );
  const {
    data: address,
    isLoading: isLoadingAddress,
  } = fetchAndSubscribe(
    propertyActions.getAddressAction(property.id),
    propertySelectors.addedAddresses(property.id),
    propertySelectors.isAddressBeingAdded(property.id),
    [property],
  );

  const isLoading = favoritesBeingAdded.includes(property.id);

  return (
    <div className="property">
      <img alt={property.description} src={property.imageUrl} />
      <div>
        {isLoadingAddress && <Loader text=" loading address" />}
        {!isLoadingAddress && address && (
          <b>{`${address.streetName}, ${address.city}, ${address.zipCode}`}</b>
        )}
      </div>
      <p>{property.description}</p>
      <div className="property__actions">
        {!property.isFavorite && (
          <>
            <button type="button" onClick={() => addToFavorite()}>
              {isLoading ? <Loader text="updating" /> : 'Add to favorites'}
            </button>
            {favoritesError && <Error error={favoritesError} smallDisplay />}
          </>
        )}
        {property.isFavorite && <span>Is favorite</span>}
        <div>
          <textarea
            onChange={(event) => setComment(event.currentTarget.value)}
            rows={3}
            value={comment}
            placeholder="comment property"
          />
          {commentError && <Error error={commentError} smallDisplay />}
          <button
            type="button"
            onClick={() => {
              setComment('');
              addComment();
            }}
          >
            {isAddingComment ? <Loader text="updating" /> : 'Submit Comment'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Property;
