import React, { Component } from "react";
import Presentation from "./Presentation";

interface ContainerState {
  count: number;
}

class Container extends Component<unknown, ContainerState> {
  intervalId: ReturnType<typeof setTimeout>;

  constructor(props: unknown) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        count: prevState.count + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const { count } = this.state;
    return <Presentation count={count} />;
  }
}

export default Container;
