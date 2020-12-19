import * as React from "react";
import { gql, useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";
import { ReactComponent as Loader } from "../../svg/loader.svg";

const Register: React.FC = () => {
  interface IFormData {
    username: string;
    email: string;
    password: string;
  }

  interface IError {
    [key: string]: any;
  }
  ///states/////////////////////////////

  const [formData, setFormData] = React.useState<IFormData>({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = React.useState<IError>({
    exception: {
      errors: {
        username: null,
        email: null,
        password: null,
        general: null,
      },
    },
  });

  //////queries & mutations ///////////

  const REGISTER = gql`
    mutation RegisterUser(
      $username: String!
      $email: String!
      $password: String!
    ) {
      register(
        authInput: { username: $username, email: $email, password: $password }
      ) {
        id
        username
        email
        token
      }
    }
  `;

  ///////////handlers////////////////////

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    register();
  };

  /////hooks//////////////////////////
  const history = useHistory();
  const [register, registerResponse] = useMutation(REGISTER, {
    update(proxy, result) {
      console.log(result);
    },
    variables: {
      ...formData,
    },
    onError({ graphQLErrors }) {
      console.log(graphQLErrors);
      if (graphQLErrors[0].extensions) setError(graphQLErrors[0].extensions);
    },
    onCompleted() {
      history.push("/");
    },
  });
  return (
    <div className="register">
      <div className="register__header">
        <h3>Ultranet</h3>
      </div>
      <div className="register__form">
        {error.exception.errors.general && (
          <span className="error">{error.exception.errors.general}</span>
        )}
        <form onSubmit={submitHandler}>
          <label htmlFor="username" className="register__form__label">
            username
            <input
              onChange={inputHandler}
              type="text"
              name="username"
              id="username"
              value={formData.username}
            />
            {error.exception.errors.username && (
              <span className="error">{error.exception.errors.username}</span>
            )}
          </label>
          <label htmlFor="email" className="register__form__label">
            email
            <input
              onChange={inputHandler}
              type="email"
              name="email"
              value={formData.email}
              id="email"
            />
            {error.exception.errors.email && (
              <span className="error">{error.exception.errors.email}</span>
            )}
          </label>
          <label htmlFor="password" className="register__form__label">
            password
            <input
              onChange={inputHandler}
              type="password"
              id="password"
              name="password"
              value={formData.password}
            />
            {error.exception.errors.password && (
              <span className="error">{error.exception.errors.password}</span>
            )}
          </label>
          <button aria-label="register">
            Register
            {registerResponse.loading && <Loader />}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
