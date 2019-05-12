import React from 'react';

const Responsive = (props) => {
    const width = window.screen.width;
    const height = window.screen.height;
    const { children: callback} = props;
    
    return callback(width, height);
}

export default Responsive;