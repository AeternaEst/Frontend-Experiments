import React from "react";

const NoJsx = React.createElement(
  "div",
  {
    className: "no-jsx",
  },
  [
    React.createElement("h2", { className: "no-jsx__header" }, "Hello World"),
    React.createElement(
      "p",
      { className: "no-jsx__text" },
      "This is some text content"
    ),
  ]
);

export default NoJsx;
