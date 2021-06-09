import React from "react";

interface ButtonProps {
  text: string;
}

const Button = (props: ButtonProps, ref: React.Ref<HTMLButtonElement>) => (
  <button
    ref={ref}
    onFocus={() => console.log("button received focus")}
    type="button"
    className="button"
  >
    {props.text}
  </button>
);

export default React.forwardRef<HTMLButtonElement, ButtonProps>(Button);
