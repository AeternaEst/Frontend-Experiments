import React from "react";
import ReactDOM from "react-dom";
import ForwardRef from "./components/Refs/ForwardRef";

const injectTarget = document.querySelector(".root");

ReactDOM.render(<ForwardRef />, injectTarget);
