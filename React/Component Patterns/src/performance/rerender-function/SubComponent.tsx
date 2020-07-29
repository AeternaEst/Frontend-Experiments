/* eslint-disable react/prop-types */
import React, { memo } from "react";

interface SubComponentProps {
  title: string;
  onClick: () => void;
}

const SubComponent: React.FC<SubComponentProps> = (props: SubComponentProps): React.ReactElement => {

  console.log("rendering subcomponent");

  return (<div className="sub-component">
    <h3>{props.title}</h3>
    <button type="button" onClick={props.onClick}>Callback Click</button>
  </div>)
}

export default memo(SubComponent); /* memo turns this into a pure component */