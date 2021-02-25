import React, { useState } from "react";

const RerenderWithKey: React.FunctionComponent = (): React.ReactElement => (
  <div className="rerender-with-key">
    <p>The time is {new Date(Date.now()).toLocaleTimeString()}</p>
  </div>
);

const RerenderWithKeyContainer: React.FunctionComponent = (): React.ReactElement => {
  const randomNumber = () => {
    const number = Math.round(Math.random() * 100);
    console.log(`random number ${number}`);
    return number;
  };
  const [key, setKey] = useState(1);

  return (
    <div className="rerender-with-key-container">
      <button
        type="button"
        onClick={() => {
          console.log("clicked");
          return setKey(randomNumber());
        }}
      >
        Change key
      </button>
      <RerenderWithKey key={key} />
    </div>
  );
};

export default RerenderWithKeyContainer;
