import React, { FunctionComponent, memo, useState } from "react";

interface SimplePureFunctionComponent {
  message: string;
}

const SimplePureFunctionComponent: FunctionComponent<SimplePureFunctionComponent> = (
  props: SimplePureFunctionComponent
) => {
  const { message } = props;
  const [isOpen, setIsOpen] = useState(true);
  console.log("SimplePureFunctionComponent rerender");

  return (
    <div className="simpe-pure-function-component">
      <p>SimplePureFunctionComponent</p>
      {isOpen && (
        <>
          <p>{message}</p>
          <button type="button" onClick={() => setIsOpen(false)}>
            Close
          </button>
        </>
      )}

      {!isOpen && (
        <button type="button" onClick={() => setIsOpen(true)}>
          Open
        </button>
      )}
    </div>
  );
};

// If memo is removed it will rerender everytime even given the same props
export default memo(SimplePureFunctionComponent);
