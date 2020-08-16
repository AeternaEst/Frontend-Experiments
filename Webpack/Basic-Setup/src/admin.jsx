import React, { Suspense } from 'react';
import { render } from 'react-dom';
import classnames from "classnames";
import SharedComponent from './shared-component';

const DynamicComponent = React.lazy(() =>
  import("./dynamic-imports/dynamic-console")
);

const AdminApp = () => {
    return <div className={classnames("admin-app", {
        optional: 2 > 1
    })}>
        <h2>Admin App</h2>
        <SharedComponent />
        <Suspense fallback={<div>Loading...</div>}>
            <DynamicComponent />
      </Suspense>
    </div>
}

const root = document.getElementById("admin");

render(<AdminApp />, root);