import React from 'react';
import { ConfigContext } from './ContextService';
import Layer2 from './Layer2';

const Layer1 = () => (
  <ConfigContext.Consumer>
    {config => (
      <div>
        <h2>Layer 1</h2>
        <span><strong>{config.language}</strong></span>
        <Layer2 />
      </div>
    )}
  </ConfigContext.Consumer>
);

export default Layer1;