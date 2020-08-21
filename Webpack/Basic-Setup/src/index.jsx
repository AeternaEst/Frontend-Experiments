import React, { Suspense } from "react";
import { render } from "react-dom";
import txt from "./hello.txt";
import classnames from "classnames";
import SharedComponent from "./shared-component";
import "./styles.css";

const DynamicComponent = React.lazy(() =>
  import("./dynamic-imports/dynamic-console")
);

const App = () => {
  /* Log environment variables made available through webpack.DefinePlugin */
  console.log("environment variable PRODUCTION", process.env.NODE_ENV);
  console.log("environment variable DEBUG", DEBUG);

  return (
    <div
      className={classnames("app", {
        optional: 2 > 1,
      })}
    >
      <h2>{txt}</h2>
      <SharedComponent />
      <Suspense fallback={<div>Loading...</div>}>
        <DynamicComponent />
      </Suspense>
    </div>
  );
};

const root = document.getElementById("root");

render(<App />, root);
