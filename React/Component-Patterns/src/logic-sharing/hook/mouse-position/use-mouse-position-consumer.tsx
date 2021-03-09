import React from "react";
import UseMousePosition from "./use-mouse-position";

const UseMousePositionConsumer: React.FunctionComponent = () => {
  const mousePosition = UseMousePosition();
  return (
    <div className="use-mouse-position-consumer">
      <h5>Use Mouse Position Consumer</h5>
      <p>X: {mousePosition.x}</p>
      <p>Y: {mousePosition.y}</p>
    </div>
  );
};

export default UseMousePositionConsumer;
