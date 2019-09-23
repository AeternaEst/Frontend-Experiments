import React from 'react';
import { ConfigContext, ThemeContext } from './ContextService';

const Layer4 = props => {
    return (
        <ConfigContext.Consumer>
            {({language, authenticated}) => (
            <ThemeContext.Consumer>
                {({theme, setTheme}) => (
                    <div>
                        <h2>Layer 4 - Recap layer</h2>
                        <span><strong>{language} - {theme} - {authenticated.toString()}</strong></span>
                        <button onClick={() => setTheme(theme === 'Dark' ? 'Light' : 'Dark')}>Change Theme</button>
                    </div>
                )}
            </ThemeContext.Consumer>
            )}
        </ConfigContext.Consumer>
    )
}

export default Layer4;