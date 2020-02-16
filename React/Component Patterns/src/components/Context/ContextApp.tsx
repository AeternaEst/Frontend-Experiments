import React, { useState } from "react";
import { ConfigContext, ThemeContext } from "./ContextService";
import Layer1 from "./Layer1";

const ContextApp = () => {
  const configRoot = document.getElementById("config");
  const config = JSON.parse(configRoot.innerHTML);

  const [theme, setTheme] = useState<string>(config.theme);

  const configContext: ConfigContext = {
    language: config.language,
    isAuthenticated: config.authenticated
  };

  const themeContext: ThemeContext = {
    theme,
    setTheme
  };

  return (
    <ConfigContext.Provider value={configContext}>
      <ThemeContext.Provider value={themeContext}>
        <Layer1 />
      </ThemeContext.Provider>
    </ConfigContext.Provider>
  );
};

export default ContextApp;
