import * as React from "react";
import Aside from "../../components/aside/aside";
import Core from "../../components/core/core";
import Friends from "../../components/friends/friends";
import { globalContext } from "../../store/context/global.context";

const Main: React.FC = () => {
  const { state, dispatch } = React.useContext(globalContext);
  React.useEffect(() => {
    const user = localStorage.getItem("user");
    if (user && state.user.id === null) {
      dispatch({
        type: "USER_LOGIN",
        user: JSON.parse(user),
      });
    }
  }, [dispatch, state.user.id]);

  return (
    <div className="main">
      <Aside />
      <Core />
      <Friends />
    </div>
  );
};

export default Main;
