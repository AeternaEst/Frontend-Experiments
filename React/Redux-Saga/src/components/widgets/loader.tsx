import React, { FC } from "react";

export interface LoaderProps {
  text: string;
}

const Loader: FC<LoaderProps> = ({ text }) => (
  <div className="loader">
    ...
    {text}
  </div>
);

export default Loader;
