import React from "react";

interface ResponsiveProps {
  children: (width: number, height: number) => React.ReactElement;
}

const Responsive: React.FunctionComponent<ResponsiveProps> = (
  props: ResponsiveProps
) => {
  const { width } = window.screen;
  const { height } = window.screen;
  const { children: callback } = props;

  return callback(width, height);
};

export default Responsive;
