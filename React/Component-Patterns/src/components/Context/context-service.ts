import React from "react";

export interface ConfigContext {
  language: string;
  isAuthenticated: boolean;
}

export interface ThemeContext {
  theme: string;
  setTheme: (theme: string) => void;
}

const defaultConfigContext: ConfigContext = {
  language: "DK",
  isAuthenticated: false,
};

const defaultThemeContext: ThemeContext = {
  theme: "Dark",
  setTheme: (theme: string) => console.log(theme),
};

export const configContext = React.createContext<ConfigContext>(
  defaultConfigContext
);

export const themeContext = React.createContext<ThemeContext>(
  defaultThemeContext
);
