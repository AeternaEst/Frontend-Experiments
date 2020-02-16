import React, { FunctionComponent } from "react";

interface ShowCounterProps {
  count: number;
}

const ShowCounter: FunctionComponent<ShowCounterProps> = (
  props: ShowCounterProps
) => <h3>Current Count: {props.count}</h3>;

export default ShowCounter;
