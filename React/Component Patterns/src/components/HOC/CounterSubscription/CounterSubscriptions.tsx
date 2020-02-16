import React, { FunctionComponent } from "react";
import ShowCounter from "./ShowCounter";
import withCounterSubscription from "./withCounterSubscription";

const Subscription1 = withCounterSubscription(ShowCounter, 2000);
const Subscription2 = withCounterSubscription(ShowCounter, 1000);

const DoubleSubs: FunctionComponent = () => (
  <div className="double-subs">
    <Subscription1 />
    <Subscription2 />
  </div>
);

export default DoubleSubs;
