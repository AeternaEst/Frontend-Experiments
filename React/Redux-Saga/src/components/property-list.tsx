import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { State } from '../reducers/root-reducer';
import Property from './property';
import { propertyActions } from '../sagas/property-saga';

const PropertyList: FC = () => {
    const properties = useSelector((state: State) => state.propertyState.properties);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(propertyActions.fetch)
    }, []);

    return (<div className="property-list">
        <h3>Properties</h3>
        {
            properties.map(property => <Property property={property} />)
        }
    </div>)
}

export default PropertyList;