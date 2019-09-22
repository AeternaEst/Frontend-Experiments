import React from 'react';

const withCounterSubscription = (WrappedComponent, timer) => {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                count: 0
            }
        }

        componentDidMount() {
            this.intervalId = setInterval(() => {
                this.setState((prevState) => {
                    return {
                        count: prevState.count + 1
                    }
                });
            }, timer);
        }

        render() {
            return <WrappedComponent count={this.state.count} />
        }
    }
}

export default withCounterSubscription;