import * as React from "react";
import Story from "../story/story";
import Contact from "../contact/contact";
import Profile from "../profile/profile";

const Block: React.FC<{ active: boolean }> = ({ active }) => {
  return (
    <div className={active ? "block-active" : "block"}>
      <Profile />
      <Story />
      <Contact />
    </div>
  );
};

export default Block;
