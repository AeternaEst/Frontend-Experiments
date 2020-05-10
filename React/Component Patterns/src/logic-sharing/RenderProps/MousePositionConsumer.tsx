import React from "react";
import MousePosition from "./MousePosition";

const MousePositionConstumer = () => (
  <div className="mouse-position-consumer">
    <MousePosition
      render={(x, y) => (
        <>
          <p>X: {x}</p>
          <p>Y: {y}</p>
        </>
      )}
    >
      {(x, y) => (
        <>
          <p>X: {x}</p>
          <p>Y: {y}</p>
        </>
      )}
    </MousePosition>
  </div>
);

export default MousePositionConstumer;
