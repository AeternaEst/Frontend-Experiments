import React, { PureComponent, FC, useState } from 'react';
import { Property } from '../types/property';
import { useDispatch } from 'react-redux';
import { propertyActions } from '../sagas/property-saga';

interface PropertyProps {
    property: Property;
}

const Property: FC<PropertyProps> = (props: PropertyProps) => {
    const [comment, setComment] = useState("");
    const dispatch = useDispatch();
    return (
        <div className="property">
            <img src={props.property.imageUrl}/>
            <div><b>{props.property.address}</b></div>
            <p>{props.property.description}</p>
            <div className="property__actions">
            {
                !props.property.isFavorite && (
                    <button type="button" onClick={() => dispatch(propertyActions.addToFavorite(props.property.id))}>Add to favorites</button>
                )
            }
            {
                props.property.isFavorite && (
                    <span>Is favorite</span>
                )
            }
            <div>
                <textarea onChange={(event) => setComment(event.currentTarget.value)} rows={3} value={comment} placeholder="comment property"/>
                <button onClick={() => {
                    setComment("");
                    dispatch(propertyActions.addComment(props.property.id, comment))
                }}>Submit Comment</button>
            </div>
            </div>
        </div>
    )
}

export default Property;