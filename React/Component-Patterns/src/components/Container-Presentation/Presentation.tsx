import React, { FunctionComponent } from "react";

interface PresentationProps {
  count: number;
}

const Presentation: FunctionComponent<PresentationProps> = (
  props: PresentationProps
) => (
  <div>
    <span>The current count is: {props.count}</span>
  </div>
);

export default Presentation;
