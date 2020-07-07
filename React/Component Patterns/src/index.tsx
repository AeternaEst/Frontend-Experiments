import React from "react";
import ReactDOM from "react-dom";
import RerenderWithKeyContainer from "./misc/rerender-with-key";

const injectTarget = document.querySelector(".root");

ReactDOM.render(<RerenderWithKeyContainer />, injectTarget);
