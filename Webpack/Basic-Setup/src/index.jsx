import React from 'react';
import { render } from 'react-dom';
import txt from "./hello.txt";
import classnames from "classnames";
import SharedComponent from './shared-component';

const App = () => {
    return <div className={classnames("app", {
        optional: 2 > 1
    })}>
        <h2>{txt}</h2>
        <SharedComponent />
    </div>
}

const root = document.getElementById("root");

render(<App />, root);