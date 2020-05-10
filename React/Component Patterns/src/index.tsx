import React from "react";
import ReactDOM from "react-dom";
import WithMousePositionConsumer from "./logic-sharing/HOC/WithMousePositionConsumer";

const injectTarget = document.querySelector(".root");

// @ts-ignore
ReactDOM.render(<WithMousePositionConsumer />, injectTarget);
