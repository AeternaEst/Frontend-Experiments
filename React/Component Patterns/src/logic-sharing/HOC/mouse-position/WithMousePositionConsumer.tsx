/* eslint-disable react/prop-types */
import React from "react";
import WithMousePosition, { WithMousePositionProps } from "./WithMousePosition";

interface WithMousePositionConstumerProps extends WithMousePositionProps {}

const WithMousePositionConstumer: React.FunctionComponent<WithMousePositionConstumerProps> = (
  props
) => (
  <div className="with-mouse-position-consumer">
    <p>X: {props.mousePosition.x}</p>
    <p>Y: {props.mousePosition.y}</p>
  </div>
);

export default WithMousePosition(WithMousePositionConstumer);
