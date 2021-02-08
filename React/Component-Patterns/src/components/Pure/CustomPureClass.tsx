import React from "react";

interface CustomPureClassProps {
  message: string;
}

interface CustomPureClassState {
  isOpen: boolean;
}

class CustomPureClass extends React.Component<
  CustomPureClassProps,
  CustomPureClassState
> {
  constructor(props: CustomPureClassProps) {
    super(props);
    this.state = {
      isOpen: true
    };
  }

  // Custom override to avoid updating if !isOpen
  shouldComponentUpdate(
    nextProps: CustomPureClassProps,
    nextState: CustomPureClassState
  ) {
    if (!this.state.isOpen && !nextState.isOpen) {
      return false;
    }

    if (this.state.isOpen && !nextState.isOpen) {
      return true;
    }

    return this.props.message !== nextProps.message;
  }

  render() {
    const { message } = this.props;
    console.log("CustomPureClass rerender");
    return (
      <div className="custom-pure-class">
        <p>CustomPureClass</p>
        {this.state.isOpen && (
          <>
            <p>{message}</p>
            <button
              type="button"
              onClick={() => this.setState({ isOpen: false })}
            >
              Close
            </button>
          </>
        )}

        {!this.state.isOpen && (
          <button type="button" onClick={() => this.setState({ isOpen: true })}>
            Open
          </button>
        )}
      </div>
    );
  }
}

export default CustomPureClass;
