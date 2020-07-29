import React from "react";
import ReactDOM from "react-dom";
import RerenderFunction from "./performance/rerender-function/RerenderFunction";

const injectTarget = document.querySelector(".root");

ReactDOM.render(<RerenderFunction />, injectTarget);
