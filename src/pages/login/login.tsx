import { useMutation } from "@apollo/client";
import * as React from "react";
import { ReactComponent as Loader } from "../../svg/loader.svg";
import { gql } from "@apollo/client";
import { useHistory } from "react-router-dom";
import { globalContext } from "../../store/context/global.context";

const Login: React.FC = () => {
  interface IFormData {
    email: string;
    password: string;
  }

  interface IError {
    [key: string]: any;
  }

  //////states////////

  const [formData, setFormData] = React.useState<IFormData>({
    email: "",
    password: "",
  });

  const [error, setError] = React.useState<IError>({
    exception: {
      errors: {
        email: null,
        password: null,
        general: null,
      },
    },
  });

  //////queries & mutations ///////////

  const LOGIN = gql`
    mutation LoginUser($email: String!, $password: String!) {
      login(email: $email, password: $password) {
        id
        username
        email
        token
      }
    }
  `;

  ///////hooks////////////

  const { dispatch } = React.useContext(globalContext);

  const [login, loginResponse] = useMutation(LOGIN, {
    update(proxy, result) {
      const user = result.data.login;
      localStorage.setItem("token", user.token);
      localStorage.setItem("user", JSON.stringify(user));
      dispatch({
        type: "USER_LOGIN",
        user,
      });
    },
    variables: {
      email: formData.email,
      password: formData.password,
    },
    onError({ graphQLErrors }) {
      if (graphQLErrors[0].extensions) setError(graphQLErrors[0].extensions);
    },
    onCompleted() {
      history.push("/");
    },
  });

  const history = useHistory();

  //////handlers//////////////////////

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login();
  };

  const registerHandler = () => {
    history.push("/register");
  };

  return (
    <div className="login">
      <div className="login__header">
        <h3>Ultranet</h3>
        <p>broaden your life </p>
        <p>connect and share </p>
      </div>
      <div className="login__form">
        {error.exception.errors.general && (
          <span className="error">{error.exception.errors.general}</span>
        )}
        <form name="login form" onSubmit={submitHandler}>
          <label htmlFor="email" className="login__form__label">
            email
            <input
              type="email"
              id="email"
              className="login__form__input"
              name="email"
              onChange={inputHandler}
              value={formData.email}
            />
            {error.exception.errors.email && (
              <span className="error">{error.exception.errors.email}</span>
            )}
          </label>
          <label htmlFor="password" className="login__form__label">
            password
            <input
              type="password"
              name="password"
              id="password"
              className="login__form__input"
              onChange={inputHandler}
              value={formData.password}
            />
            {error.exception.errors.password && (
              <span className="error">{error.exception.errors.password}</span>
            )}
          </label>
          <button aria-label="login">
            Log In
            {loginResponse.loading && <Loader />}
          </button>
        </form>
        <button aria-label="register" onClick={registerHandler}>
          create new account
        </button>
      </div>
    </div>
  );
};
export default Login;
