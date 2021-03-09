/* eslint-disable react/prop-types */
import React from "react";
import WithResponsive, { WithResponsiveProps } from "./with-responsive";

interface WithResponsiveConsumerProps extends WithResponsiveProps {
  windowBreakpointMessage: string;
  targetBreakpointMessage: string;
}

const WithResponsiveConsumer: React.FunctionComponent<WithResponsiveConsumerProps> = (
  props
) => (
  <div className="with-responsive-consumer" style={{ width: "50%" }}>
    <p>
      {props.windowBreakpointMessage} {props.responsive.windowBreakpoint}
    </p>
    <p>
      {props.targetBreakpointMessage} {props.responsive.targetBreakpoint}
    </p>
  </div>
);

export default WithResponsive(
  WithResponsiveConsumer,
  "with-responsive-consumer"
);
