import React, {Component} from 'react';

var ComponentWithLoading = (Component) => ({isLoading, ...rest}) => {
    if(isLoading) {
        return (<h3>Not Loaded Yet...</h3>);
    }

    return (<Component { ...rest } />)
}

export default ComponentWithLoading;