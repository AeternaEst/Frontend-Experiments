import React, { useState } from 'react';
import Layer1 from './Layer1';
import { ConfigContext, ThemeContext } from './ContextService'; 

const ContextApp = props => {
    const configRoot = document.getElementById("config");
    const config = JSON.parse(configRoot.innerHTML);

    const [theme, setTheme] = useState(config.theme); 

    return (<ConfigContext.Provider value={config}>
            <ThemeContext.Provider value={{theme, setTheme}}>
                <Layer1 />
            </ThemeContext.Provider>
    </ConfigContext.Provider>)
}

export default ContextApp;