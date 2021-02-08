import React from "react";
import WithMousePosition, { WithMousePositionProps } from "./WithMousePosition";

const WithMousePositionConstumer: React.FC<WithMousePositionProps> = ({
  mousePosition
}: WithMousePositionProps) => (
  <div className="with-mouse-position-consumer">
    <p>X: {mousePosition.x}</p>
    <p>Y: {mousePosition.y}</p>
  </div>
);

export default WithMousePosition(WithMousePositionConstumer);
