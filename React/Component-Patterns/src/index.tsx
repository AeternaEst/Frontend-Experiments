import React from "react";
import ReactDOM from "react-dom";
import PureApp from "./components/pure/pure-app";

const injectTarget = document.querySelector(".root");

ReactDOM.render(<PureApp />, injectTarget);
