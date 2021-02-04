import React, { useRef } from "react";

const Ref: React.FC = () => {
  const refOne = useRef<HTMLButtonElement>();
  const refTwo = useRef<HTMLButtonElement>();

  const onClick = (focusOne: boolean) => {
    console.log("Button Click");
    if (!refOne.current || !refTwo.current) {
      console.log("Missing refs");
      return;
    }

    if (focusOne) {
      refOne.current.focus();
      return;
    }

    refTwo.current.focus();
  };

  return (
    <div className="ref">
      <button
        ref={refOne}
        onFocus={() => console.log("Button 1 received focus")}
        onClick={() => onClick(false)}
        type="button"
      >
        Focus Two
      </button>
      <button
        ref={refTwo}
        onFocus={() => console.log("Button 2 received focus")}
        onClick={() => onClick(true)}
        type="button"
      >
        Focus One
      </button>
    </div>
  );
};

export default Ref;
