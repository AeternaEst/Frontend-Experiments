import React, { useContext } from "react";
import { themeContext } from "./context-service";
import Layer3 from "./layer3";

const Layer2 = () => {
  const context = useContext(themeContext);
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
