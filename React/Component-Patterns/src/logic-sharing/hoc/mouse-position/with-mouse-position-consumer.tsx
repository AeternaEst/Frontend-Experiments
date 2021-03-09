import React from "react";
import WithMousePosition, {
  WithMousePositionProps,
} from "./with-mouse-position";

const WithMousePositionConstumer: React.FC<WithMousePositionProps> = ({
  mousePosition,
}: WithMousePositionProps) => (
  <div className="with-mouse-position-consumer">
    <p>X: {mousePosition.x}</p>
    <p>Y: {mousePosition.y}</p>
  </div>
);

export default WithMousePosition(WithMousePositionConstumer);
