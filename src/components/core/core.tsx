import * as React from "react";
import Hero from "../hero/hero";
import Timeline from "../timeline/timeline";

const Core: React.FC = () => {
  return (
    <div className="core">
      <div>Serch bar</div>
      <div className="core__container">
        <Hero />
        <Timeline />
      </div>
    </div>
  );
};

export default Core;
