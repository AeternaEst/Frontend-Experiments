import React from 'react';
import Button from './Button';

const ChildAwareContainer = props => {
    return(
        <div className="child-aware-container">
            <Button className="passed-class-name">Hello Button</Button>
        </div>
    )
}

export default ChildAwareContainer;