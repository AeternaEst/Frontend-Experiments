import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './helloworld';
import HelloWorldWithProps from './helloworldwithprops';

const fakeProps = {
    message: "Hello Advanced World With Props",
    count: 10
}

ReactDOM.render(<HelloWorldWithProps {...fakeProps} />, document.getElementById('root'));