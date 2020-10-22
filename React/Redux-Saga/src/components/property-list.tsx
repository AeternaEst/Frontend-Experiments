import React, { FC } from "react";
import Property from "./property";
import { fetchAndSubscribe } from "../utils/react-redux-utils";
import { propertyActions } from "../actions/property-actions";
import { propertySelectors } from "../selectors/property-selectors";
import withErrorHandling from "./hoc/with-error-handling";
import Loader from "./widgets/loader";

interface PropertyListProps {
  headline: string;
}

const PropertyList: FC<PropertyListProps> = (props) => {
  const { data: properties, isLoading: isFetching } = fetchAndSubscribe(
    propertyActions.fetch,
    propertySelectors.properties,
    propertySelectors.isFetching,
    []
  );

  return (
    <div className="property-list">
      <h3>{props.headline}</h3>
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

export default withErrorHandling(PropertyList, propertySelectors.fetchError);
