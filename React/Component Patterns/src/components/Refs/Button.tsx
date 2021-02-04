import React from "react";

const Button = React.forwardRef((_props, ref: React.Ref<HTMLButtonElement>) => (
  <button
    ref={ref}
    onFocus={() => console.log("button received focus")}
    type="button"
    className="button"
  >
    Hello
  </button>
));

export default Button;
