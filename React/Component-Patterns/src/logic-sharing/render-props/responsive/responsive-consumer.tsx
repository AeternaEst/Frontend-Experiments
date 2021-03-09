import React from "react";
import Responsive, { ResponsiveState } from "./responsive";

const ResponsiveConsumer: React.FunctionComponent = () => (
  <div className="responsive-consumer" style={{ width: "50%" }}>
    <Responsive>
      {(responsive: ResponsiveState) => (
        <>
          <p>Curent window breakpoint is: {responsive.windowBreakpoint}</p>
          <p>Curent target breakpoint is: {responsive.targetBreakpoint}</p>
        </>
      )}
    </Responsive>
  </div>
);

export default ResponsiveConsumer;
