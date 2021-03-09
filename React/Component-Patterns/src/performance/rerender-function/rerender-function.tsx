import React, { useCallback, useEffect, useState } from "react";
import SubComponent from "./sub-component";

const RerenderFunction: React.FC = () => {
  console.log("rendering parent component");
  const [message, setMessage] = useState("Rerender function message");

  useEffect(() => {
    setTimeout(() => {
      setMessage("Updated rerender function message");
    }, 2000);
  }, []);

  /* removing useCallback will cause child component to update */
  const handleClick = useCallback(
    () => console.log("Won't cause rerender"),
    []
  );

  return (
    <div className="rerender-function">
      <h2>{message}</h2>
      <SubComponent title="Hello World" onClick={handleClick} />
    </div>
  );
};

export default RerenderFunction;
