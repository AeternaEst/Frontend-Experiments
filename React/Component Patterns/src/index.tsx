import React from "react";
import ReactDOM from "react-dom";
import ProfilerWithMemo from "./performance/profiler-use-memo/ProfilerWithMemo";

const injectTarget = document.querySelector(".root");

ReactDOM.render(<ProfilerWithMemo />, injectTarget);
