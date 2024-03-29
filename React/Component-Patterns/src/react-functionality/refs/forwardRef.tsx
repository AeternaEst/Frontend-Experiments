import React, { useEffect, useRef } from "react";
import Button from "./button";

const ForwardRef: React.FC = () => {
  const ref = useRef<HTMLButtonElement>();

  useEffect(() => {
    const id = setTimeout(() => {
      if (ref && ref.current) {
        ref.current.focus();
      }
    }, 2000);

    return () => clearTimeout(id);
  }, []);

  return <Button text="Hello" ref={ref} />;
};

export default ForwardRef;
