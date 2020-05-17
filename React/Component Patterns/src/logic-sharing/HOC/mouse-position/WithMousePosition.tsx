import React from "react";

interface MousePositionState {
  x: number;
  y: number;
}

export interface WithMousePositionProps {
  mousePosition: MousePositionState;
}

const WithMousePosition = <P extends WithMousePositionProps>(
  Component: React.ComponentType<P>
) => {
  return class MousePosition extends React.Component<
    P & WithMousePositionProps,
    MousePositionState
  > {
    constructor(props: Readonly<P & WithMousePositionProps>) {
      super(props);
      this.state = {
        x: 0,
        y: 0
      };
      this.onMouseMove = this.onMouseMove.bind(this);
    }

    componentDidMount() {
      window.addEventListener("mousemove", this.onMouseMove);
    }

    componentWillUnmount() {
      window.removeEventListener("mousemove", this.onMouseMove);
    }

    onMouseMove(e: MouseEvent) {
      this.setState({
        x: e.clientX,
        y: e.clientY
      });
    }

    render() {
      return <Component {...this.props} mousePosition={this.state} />;
    }
  };
};

export default WithMousePosition;
