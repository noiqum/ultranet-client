import * as React from "react";
import IntroBox from "../introBox/introBox";
import StatusBox from "../status-box/statusBox";

const Timeline: React.FC = () => {
  return (
    <div className="timeline">
      <div className="timeline__left">
        <IntroBox />
      </div>
      <div className="timeline__right">
        <StatusBox />
      </div>
    </div>
  );
};

export default Timeline;
