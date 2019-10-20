import React, { FunctionComponent } from 'react';

interface DisplayScreenProps {
  width: number;
  height: number;
}

const DisplayScreen: FunctionComponent<DisplayScreenProps> = (props: DisplayScreenProps) => (
  <div className="display-screen">
    <p>
      Width:{props.width}
    </p>
    <p>
      Height:{props.height}
    </p>
  </div>
);

export default DisplayScreen;