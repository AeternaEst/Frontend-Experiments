import React from 'react';

const HelloWorld = (props) => (
    <div>
        <h2>{props.title}</h2>
        <p>{props.text}</p>
    </div>
)

export default HelloWorld;