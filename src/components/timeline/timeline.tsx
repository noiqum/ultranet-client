import * as React from "react";
import StatusBox from "../status-box/statusBox";

const Timeline: React.FC = () => {
  return (
    <div className="timeline">
      <div className="timeline__left"></div>
      <div className="timeline__right">
        <StatusBox />
      </div>
    </div>
  );
};

export default Timeline;
