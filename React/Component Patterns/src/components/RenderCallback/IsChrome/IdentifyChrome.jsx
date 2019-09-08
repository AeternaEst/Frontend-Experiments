import React from 'react';

const IdentifyChrome = props => {
    const { children } = props;
    const isChromeBrowser = window.navigator.userAgent.indexOf("Chrome") != -1;

    return children(isChromeBrowser);
}

export default IdentifyChrome;
