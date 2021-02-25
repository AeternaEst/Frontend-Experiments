import React from "react";
import { configContext, themeContext } from "./ContextService";

const Layer4 = () => (
  <configContext.Consumer>
    {({ language, isAuthenticated }) => (
      <themeContext.Consumer>
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
      </themeContext.Consumer>
    )}
  </configContext.Consumer>
);

export default Layer4;
