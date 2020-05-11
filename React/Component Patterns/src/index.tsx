import React from "react";
import ReactDOM from "react-dom";
import UseMousePositionConsumer from "./logic-sharing/Hook/UseMousePositionConsumer";

const injectTarget = document.querySelector(".root");

ReactDOM.render(<UseMousePositionConsumer />, injectTarget);
