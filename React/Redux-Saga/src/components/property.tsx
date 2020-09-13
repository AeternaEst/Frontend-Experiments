import React, { PureComponent, FC } from 'react';
import { Property } from '../types/property';

interface PropertyProps {
    property: Property;
}

const Property: FC<PropertyProps> = (props: PropertyProps) => {
    return (
        <div className="property">
            <img src={props.property.imageUrl}/>
            <div><b>{props.property.address}</b></div>
            <p>{props.property.description}</p>
            {
                !props.property.isFavorite && (
                    <button type="button" onClick={() => undefined}>Add to favorites</button>
                )
            }
            {
                props.property.isFavorite && (
                    <span>Is favorite</span>
                )
            }
            <textarea onClick={() => undefined} rows={3} placeholder="comment property"/>
        </div>
    )
}

export default Property;