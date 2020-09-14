import React, { FC, useMemo } from 'react';
import { Property } from '../types/property';
import { AppUser } from '../types/app-user';
import { connect } from 'react-redux';
import { State } from '../reducers/root-reducer';

interface NavigationProps {
    properties: Property[];
    user?: AppUser;
}

const Navigation: FC<NavigationProps> = (props) => {
    const numberOfComments = useMemo(() => props.properties.reduce<number>((prev, current) => prev + current.comments.length, 0), [props.properties]);
    const numberOfFavorites = useMemo(() => props.properties.filter(property => property.isFavorite).length, [props.properties]);
    return (
        <div className="navigation">
            <h2>Property King</h2>
            <div className="navigation__actions">
                <div>Comments: {numberOfComments}</div>
                <div>Favorites: {numberOfFavorites}</div>
            </div>
        </div>
    )
}

function mapStateToProps(state: State): NavigationProps {
    return {
        properties: state.propertyState.properties,
        user: state.loginState.activeUser
    }
}

export default connect(mapStateToProps)(Navigation);