import React, { useContext } from "react";
import { ThemeContext } from "./ContextService";
import Layer3 from "./Layer3";

const Layer2 = () => {
  const context = useContext(ThemeContext);
  return (
    <div>
      <h2>Layer 2</h2>
      <span>
        <strong>{context.theme}</strong>
      </span>
      <Layer3 />
    </div>
  );
};

export default Layer2;
