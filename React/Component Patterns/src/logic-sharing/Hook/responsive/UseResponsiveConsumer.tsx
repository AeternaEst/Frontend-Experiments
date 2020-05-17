import React, { useRef } from "react";
import UseResponsive from "./UseResponsive";

const UseResponsiveConsumer: React.FunctionComponent = (): React.ReactElement => {
  const ref = useRef<HTMLDivElement>();
  const breakpoint = UseResponsive(ref);

  return (
    <div ref={ref} className="use-responsive-consumer" style={{ width: "50%" }}>
      <p>The current window breakpoint is: {breakpoint.windowBreakpoint}</p>
      <p>The current target breakpoint is: {breakpoint.targetBreakpoint}</p>
    </div>
  );
};

export default UseResponsiveConsumer;
