import React, { useState } from "react";
import {
  ConfigContext,
  ThemeContext,
  configContext,
  themeContext,
} from "./ContextService";
import Layer1 from "./Layer1";

const ContextApp = () => {
  const configRoot = document.getElementById("config");
  const config = JSON.parse(configRoot.innerHTML);

  const [theme, setTheme] = useState<string>(config.theme);

  const defaultConfigContext: ConfigContext = {
    language: config.language,
    isAuthenticated: config.authenticated,
  };

  const defaultThemeContext: ThemeContext = {
    theme,
    setTheme,
  };

  return (
    <configContext.Provider value={defaultConfigContext}>
      <themeContext.Provider value={defaultThemeContext}>
        <Layer1 />
      </themeContext.Provider>
    </configContext.Provider>
  );
};

export default ContextApp;
