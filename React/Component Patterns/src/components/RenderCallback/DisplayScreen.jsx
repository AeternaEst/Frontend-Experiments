import React from 'react';

const DisplayScreen = props => (
    <div className="display-screen">
        <p>Width: {props.width}</p>
        <p>Height: {props.height}</p>
    </div>
)

export default DisplayScreen;