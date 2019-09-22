import React from 'react';

//extend React.Component to rerender everytime with the same props
class SimplePureClass extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: true
        }
    }

    render() {
        const { message } = this.props;
        console.log("SimplePureClass rerender");
        return (
            <div className="simple-pure-class">
                <p>SimplePureClass</p>
                {
                    this.state.isOpen && (
                        <>
                        <p>{message}</p>
                        <button onClick={() => this.setState({isOpen: false})}>Close</button>
                        </>
                    )                   
                }

                {
                    !this.state.isOpen && (
                        <button onClick={() => this.setState({isOpen: true})}>Open</button>
                    )
                }
                
            </div>
        )
    }
}

export default SimplePureClass;