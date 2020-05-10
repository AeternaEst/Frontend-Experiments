import React from "react";
import ReactDOM from "react-dom";
import MousePositionConstumer from "./logic-sharing/RenderProps/MousePositionConsumer";

const injectTarget = document.querySelector(".root");

ReactDOM.render(<MousePositionConstumer />, injectTarget);
