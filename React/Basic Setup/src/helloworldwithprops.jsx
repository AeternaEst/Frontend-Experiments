import React from 'react';

const HelloWorldWithProps = (props) => {
    const {message, count} = props;
    return (<div className="container">
        <p>{message}</p><span>{count}</span>
    </div>)
}

export default HelloWorldWithProps;