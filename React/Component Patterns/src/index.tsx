import React from "react";
import ReactDOM from "react-dom";
import ResponsiveConsumer from "./logic-sharing/RenderProps/responsive/ResponsiveConsumer";

const injectTarget = document.querySelector(".root");

ReactDOM.render(<ResponsiveConsumer />, injectTarget);
