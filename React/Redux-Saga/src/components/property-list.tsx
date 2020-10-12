import React, { FC } from "react";
import { State } from "../reducers/root-reducer";
import Property from "./property";
import Loader from "./loader";
import { fetchAndSubscribe } from "../utils/react-redux-utils";
import { propertyActions } from "../actions/property-actions";
import { propertySelectors } from "../selectors/property-selectors";

const PropertyList: FC = () => {
  const { data: properties, isLoading: isFetching, error } = fetchAndSubscribe(
    propertyActions.fetch,
    propertySelectors.properties,
    propertySelectors.isFetching,
    propertySelectors.fetchError,
    []
  );

  if(error) { /* TODO: Seperate error component or HOC */
    return <h1>{error.message}</h1>
  }

  return (
    <div className="property-list">
      <h3>Properties</h3>
      {isFetching && !properties.length && <Loader text="loading properties" />}
      {!isFetching && !properties.length && <p>No properties found</p>}
      <div className="property-list__properties">
        {properties.map((property) => (
          <Property key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default PropertyList;
