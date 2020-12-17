import * as React from "react";

const Login: React.FC = () => {
  return (
    <div className="login">
      <div className="login__header">
        <h3>Ultranet</h3>
        <p>broaden your life </p>
      </div>
      <div className="login__form">
        <form name="login form">
          <label htmlFor="email" className="login__form__label">
            email
            <input type="email" id="email" className="login__form__input" />
          </label>
          <label htmlFor="password" className="login__form__label">
            password
            <input type="password" name="password" id="password" />
          </label>
        </form>
      </div>
    </div>
  );
};
export default Login;
