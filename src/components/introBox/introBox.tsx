import * as React from "react";
import { ReactComponent as Home } from "../../svg/home.svg";
import { ReactComponent as Job } from "../../svg/job.svg";
import { ReactComponent as Ball } from "../../svg/ball.svg";
import { globalContext } from "../../store/context/global.context";

const IntroBox: React.FC = () => {
  const { state } = React.useContext(globalContext);
  return (
    <div className="intro-box">
      <div className="intro-box__title">
        <span>INTRODUCTION</span>
        <button className="intro-box__title__btn"></button>
      </div>
      <div className="intro-box__body">
        <div className="intro-box__body__item">
          <Job />{" "}
          <span>
            Product Designer at <span className="link">Omx10</span>{" "}
          </span>
        </div>
        <div className="intro-box__body__item">
          <Home />{" "}
          <span>
            Live In <span className="link">Amsterdam</span>
          </span>
        </div>
        <div className="intro-box__body__item">
          <Ball />{" "}
          <span>
            Player Name <span className="link">{state.user.username}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default IntroBox;
