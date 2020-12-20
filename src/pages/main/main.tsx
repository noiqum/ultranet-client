import * as React from "react";
import { globalContext } from "../../store/context/global.context";

const Main: React.FC = () => {
  const { state } = React.useContext(globalContext);
  return (
    <div className="main">
      main page
      <p>{state.user.username}</p>
    </div>
  );
};

export default Main;
