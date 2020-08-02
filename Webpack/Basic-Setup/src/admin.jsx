import React from 'react';
import { render } from 'react-dom';
import classnames from "classnames";
import SharedComponent from './shared-component';

const AdminApp = () => {
    return <div className={classnames("admin-app", {
        optional: 2 > 1
    })}>
        <h2>Admin App</h2>
        <SharedComponent />
    </div>
}

const root = document.getElementById("admin");

render(<AdminApp />, root);