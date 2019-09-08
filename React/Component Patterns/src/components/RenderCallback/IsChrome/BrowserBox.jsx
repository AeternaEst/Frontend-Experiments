import React from 'react';
import IdentifyChrome from './IdentifyChrome';

const BrowserBox = props => (
    <IdentifyChrome>
        {(isChromeBrowser) => (
            isChromeBrowser ? (
                <div className="chrome-box">Hello Chrome</div>
            ) : (
                <div className="not-chrome-box">This is not chrome</div>
            )
        )} 
    </IdentifyChrome>    
)

export default BrowserBox;