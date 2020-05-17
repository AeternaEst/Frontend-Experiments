import React, { useEffect, useRef, useState } from "react";
import {
  Breakpoint,
  getBreakpointFromWidth
} from "../../../utils/responsive-utils";

export interface ResponsiveProps {
  children: (responsive: ResponsiveState) => React.ReactElement;
}

export interface ResponsiveState {
  windowBreakpoint: Breakpoint;
  targetBreakpoint: Breakpoint;
}

const Responsive: React.FunctionComponent<ResponsiveProps> = (
  props: ResponsiveProps
) => {
  const { children } = props;
  const [currentBreakpoints, setCurrentBreakpoints] = useState<ResponsiveState>(
    {
      targetBreakpoint: Breakpoint.LARGE,
      windowBreakpoint: Breakpoint.LARGE
    }
  );
  const ref = useRef<HTMLDivElement>();

  const onResize = () => {
    const windowWidth = window.innerWidth;
    const targetWidth = ref.current.clientWidth;
    setCurrentBreakpoints({
      targetBreakpoint: getBreakpointFromWidth(targetWidth),
      windowBreakpoint: getBreakpointFromWidth(windowWidth)
    });
  };

  useEffect(() => {
    console.log("Adding window resize listener");
    window.addEventListener("resize", onResize);
    onResize();

    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div ref={ref} className="responsive">
      {children(currentBreakpoints)}
    </div>
  );
};

export default Responsive;
