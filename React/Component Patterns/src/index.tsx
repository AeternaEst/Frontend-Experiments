import React from "react";
import ReactDOM from "react-dom";
import WithResponsiveConsumer from "./logic-sharing/HOC/responsive/WithResponsiveConsumer";

const injectTarget = document.querySelector(".root");

ReactDOM.render(
  <WithResponsiveConsumer
    windowBreakpointMessage="The current window breakpoint is:"
    targetBreakpointMessage="The current target breakpoint is:"
  />,
  injectTarget
);
