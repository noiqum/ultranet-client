import * as React from "react";
import { globalContext } from "../../store/context/global.context";

const Hero: React.FC = () => {
  const { state } = React.useContext(globalContext);
  return (
    <div className="hero">
      <div className="hero__avatar">
        <img
          src="https://images.genius.com/2326b69829d58232a2521f09333da1b3.1000x1000x1.jpg"
          alt="user_profile_image"
        />
        <div>{state.user.username}</div>
      </div>
      <img
        className="hero__cover"
        src="https://images.unsplash.com/photo-1508247967583-7d982ea01526?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
        alt="profile_background_image"
      />
      <div className="hero__menu"></div>
    </div>
  );
};

export default Hero;
