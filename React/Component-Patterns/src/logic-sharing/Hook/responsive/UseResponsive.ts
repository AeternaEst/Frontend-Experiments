import { useEffect, useState } from "react";
import {
  Breakpoint,
  getBreakpointFromWidth,
} from "../../../utils/responsive-utils";

interface UseResponsiveState {
  windowBreakpoint: Breakpoint;
  targetBreakpoint: Breakpoint;
}

const UseResponsive = (
  ref: React.MutableRefObject<HTMLElement>
): UseResponsiveState => {
  const [
    currentBreakpoint,
    setCurrentBreakpoint,
  ] = useState<UseResponsiveState>({
    windowBreakpoint: Breakpoint.LARGE,
    targetBreakpoint: Breakpoint.LARGE,
  });

  const onResize = () => {
    const windowWidth = window.innerWidth;
    const targetWidth = ref.current.clientWidth;
    setCurrentBreakpoint({
      targetBreakpoint: getBreakpointFromWidth(targetWidth),
      windowBreakpoint: getBreakpointFromWidth(windowWidth),
    });
    console.log("body width resize", windowWidth, targetWidth);
  };

  useEffect(() => {
    console.log("adding window resize listener");

    window.addEventListener("resize", onResize);
    onResize();

    return () => window.removeEventListener("resize", onResize);
  }, []);

  return currentBreakpoint;
};

export default UseResponsive;
