// import { gql, useMutation } from "@apollo/client";
import * as React from "react";
import Aside from "../../components/aside/aside";
import Core from "../../components/core/core";
import Friends from "../../components/friends/friends";
import { globalContext } from "../../store/context/global.context";

const Main: React.FC = () => {
  const { state } = React.useContext(globalContext);

  return (
    <div className="main">
      <Aside />
      <Core />
      <Friends />
    </div>
  );
};

export default Main;
