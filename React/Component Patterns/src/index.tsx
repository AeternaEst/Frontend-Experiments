import React from "react";
import ReactDOM from "react-dom";
import UseMousePositionConsumer from "./logic-sharing/Hook/mouse-position/UseMousePositionConsumer";

const injectTarget = document.querySelector(".root");

ReactDOM.render(<UseMousePositionConsumer />, injectTarget);
