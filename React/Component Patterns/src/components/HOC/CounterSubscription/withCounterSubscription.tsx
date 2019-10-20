import React from 'react';

interface HOCState {
  count: number;
}

interface WrappedComponentProps {
  count: number;
}

const withCounterSubscription = (WrappedComponent: React.ComponentType<WrappedComponentProps>, timer: number) => class extends React.Component<{}, HOCState> {
  intervalId: number;

  constructor(props: any) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState(prevState => ({
        count: prevState.count + 1,
      }));
    }, timer);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return <WrappedComponent count={this.state.count} />;
  }
};

export default withCounterSubscription;