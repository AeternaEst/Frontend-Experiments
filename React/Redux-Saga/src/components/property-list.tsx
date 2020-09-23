import React, { FC, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { State } from "../reducers/root-reducer";
import Property from "./property";
import { propertyActions } from "../sagas/property-saga";
import Loader from "./loader";

const PropertyList: FC = () => {
  const properties = useSelector((state: State) => {
    return state.propertyState.properties;
  });
  const isFetching = useSelector((state: State) => {
    return state.propertyState.isFetching;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(propertyActions.fetch);
  }, []);

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
