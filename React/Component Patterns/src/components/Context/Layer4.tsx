import React from "react";
import { ConfigContext, ThemeContext } from "./ContextService";

const Layer4 = () => (
  <ConfigContext.Consumer>
    {({ language, isAuthenticated }) => (
      <ThemeContext.Consumer>
        {({ theme, setTheme }) => (
          <div>
            <h2>Layer 4 - Recap layer</h2>
            <span>
              <strong>
                {language} - {theme} - {isAuthenticated.toString()}
              </strong>
            </span>
            <button
              type="button"
              onClick={() => {
                console.log("changing themes:");
                setTheme(theme === "Dark" ? "Light" : "Dark");
              }}
            >
              Change Theme
            </button>
          </div>
        )}
      </ThemeContext.Consumer>
    )}
  </ConfigContext.Consumer>
);

export default Layer4;
