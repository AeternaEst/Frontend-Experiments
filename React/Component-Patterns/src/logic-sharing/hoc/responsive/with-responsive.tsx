import React from "react";
import {
  Breakpoint,
  getBreakpointFromWidth,
} from "../../../utils/responsive-utils";

export interface WithResponsiveProps {
  responsive: WithResponsiveState;
}

export interface WithResponsiveState {
  windowBreakpoint: Breakpoint;
  targetBreakpoint: Breakpoint;
}

const WithResponsive = <T extends WithResponsiveProps>(
  Component: React.ComponentType<T>,
  targetClass: string
) =>
  class Responsive extends React.Component<
    Omit<T, "responsive">,
    WithResponsiveState
  > {
    constructor(props: T) {
      super(props);
      this.state = {
        targetBreakpoint: Breakpoint.LARGE,
        windowBreakpoint: Breakpoint.LARGE,
      };
      this.onResize = this.onResize.bind(this);
    }

    componentDidMount() {
      window.addEventListener("resize", this.onResize);
      this.onResize();
    }

    componentWillUnmount() {
      window.removeEventListener("resize", this.onResize);
    }

    onResize() {
      const windowWidth = window.innerWidth;
      const targetWidth = document.getElementsByClassName(targetClass)[0]
        .clientWidth;
      this.setState({
        targetBreakpoint: getBreakpointFromWidth(targetWidth),
        windowBreakpoint: getBreakpointFromWidth(windowWidth),
      });
    }

    render() {
      return (
        <Component
          {...(this.props as T)}
          responsive={{
            windowBreakpoint: this.state.windowBreakpoint,
            targetBreakpoint: this.state.targetBreakpoint,
          }}
        />
      );
    }
  };

export default WithResponsive;
