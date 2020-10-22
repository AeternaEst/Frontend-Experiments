import React, { FC } from "react";

export interface LoaderProps {
  text: string;
}

const Loader: FC<LoaderProps> = (props) => {
  return <div className="loader">... {props.text}</div>;
};

export default Loader;
