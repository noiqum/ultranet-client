import * as React from "react";
import { ReactComponent as MsgSide } from "../../svg/msg-side.svg";

type TNotificationProp = {
  onclick: () => void;
};

const Notification: React.FC<TNotificationProp> = ({ onclick }) => {
  return (
    <div className="notification" onClick={onclick}>
      <MsgSide />
    </div>
  );
};

export default Notification;
