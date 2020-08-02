import React from 'react';
import classnames from "classnames";

const SharedComponent = () => {
    return <div className={classnames("shared-component", {
        shared: 2 > 1
    })}>
        <p>Shared Component</p>
    </div>
}

export default SharedComponent;