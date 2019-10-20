import React from 'react';
import { ConfigContext } from './ContextService';
import Layer4 from './Layer4';

class Layer3 extends React.Component {
  render() {
    const context = this.context as ConfigContext;
    return (
      <div>
        <h2>Layer 3</h2>
        <span><strong>is authenticated: {context.isAuthenticated.toString()}</strong></span>
        <Layer4 />
      </div>
    );
  }
}
Layer3.contextType = ConfigContext;

export default Layer3;