import { useEffect, useState } from "react";

export interface MousePosition {
  x: number;
  y: number;
}

const UseMousePosition = (): MousePosition => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });

  const onMouseMove = (e: MouseEvent) => {
    console.log("onMouseMove", e);
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    console.log("adding mousemove event listener");
    window.addEventListener("mousemove", onMouseMove);

    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return {
    x: mousePosition.x,
    y: mousePosition.y,
  };
};

export default UseMousePosition;
