import React from "react";
import PropertyList from "./property-list";
import Navigation from "./navigation";
import DashBoard from "./dashboard";

require("../styling/_root-styling.css"); /* Use require to avoid typescript checking for css*/

const App: React.FC = () => {
  return (
    <div className="app-root">
      <Navigation
        texts={{ favoritePropertiesMessage: "3 or more favorite properties!" }}
      />
      <PropertyList headline="Properties" />
      <DashBoard />
    </div>
  );
};

export default App;
