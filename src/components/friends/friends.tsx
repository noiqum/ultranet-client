import * as React from "react";
import { ReactComponent as MsgSide } from "../../svg/msg-side.svg";
import Block from "../block/block";

const Friends: React.FC = () => {
  const [active, setActive] = React.useState<boolean>(false);

  return (
    <>
      <div className={active ? "friends-active" : "friends"}>
        <div
          className={active ? "aside-active__button" : "aside__button"}
          onClick={() => {
            setActive(!active);
          }}
        >
          <MsgSide />
        </div>
        <Block active={active} />
      </div>
      <div
        className={active ? "overlay-active" : "overlay"}
        onClick={() => {
          setActive(!active);
        }}
      ></div>
    </>
  );
};

export default Friends;
