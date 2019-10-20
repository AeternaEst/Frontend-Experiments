import React from 'react';
import Responsive from './Responsive';
import DisplayScreen from './DisplayScreen';

const RenderCallbackApp: React.FunctionComponent = props => (
  <>
    <Responsive>
      {
            (width, height) => (
              <ul>
                <li>Width: {width}</li>
                <li>Height: {height}</li>
              </ul>
            )
        }
    </Responsive>
    <Responsive>
      {
            (width, height) => (
              <DisplayScreen width={width} height={height} />
            )
        }
    </Responsive>
  </>
);

export default RenderCallbackApp;