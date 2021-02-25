import React from "react";
import { configContext, ConfigContext } from "./ContextService";
import Layer4 from "./Layer4";

// eslint-disable-next-line react/prefer-stateless-function
class Layer3 extends React.Component {
  render() {
    const context = this.context as ConfigContext;
    return (
      <div>
        <h2>Layer 3</h2>
        <span>
          <strong>
            is authenticated: {context.isAuthenticated.toString()}
          </strong>
        </span>
        <Layer4 />
      </div>
    );
  }
}
Layer3.contextType = configContext;

export default Layer3;
