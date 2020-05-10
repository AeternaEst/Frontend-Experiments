import React, { useEffect, useState } from "react";

/* Render props can be a named prop or the children */
export interface MousePositionProps {
  render: (x: number, y: number) => React.ReactElement;
  children: (x: number, y: number) => React.ReactElement;
  renderUsingChildren?: boolean;
}

const MousePosition: React.FunctionComponent<MousePositionProps> = ({
  render,
  children,
  renderUsingChildren
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const onMouseMove = (e: MouseEvent) => {
    console.log("mouse event: ", e);
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    console.log("adding mousemove event listener");
    window.addEventListener("mousemove", onMouseMove);

    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return renderUsingChildren
    ? children(mousePosition.x, mousePosition.y)
    : render(mousePosition.x, mousePosition.y);
};

export default MousePosition;
