import React from "react";
import ReactDOM from "react-dom";
import PureApp from "./performance/pure-component/pure-app";

const injectTarget = document.querySelector(".root");

ReactDOM.render(<PureApp />, injectTarget);
