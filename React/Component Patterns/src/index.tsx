import React from "react";
import ReactDOM from "react-dom";
import UseResponsiveConsumer from "./logic-sharing/Hook/responsive/UseResponsiveConsumer";

const injectTarget = document.querySelector(".root");

ReactDOM.render(<UseResponsiveConsumer />, injectTarget);
