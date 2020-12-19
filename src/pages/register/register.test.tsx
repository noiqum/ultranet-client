import * as React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import { ApolloProvider } from "@apollo/client";
import { MemoryRouter } from "react-router-dom";

import client from "../../apollo/client";
import Register from "./register";

afterEach(cleanup);
function setupWithoutHistory() {
  render(
    <MemoryRouter>
      <ApolloProvider client={client}>
        <Register />
      </ApolloProvider>
    </MemoryRouter>
  );
}

describe("register page", () => {
  test("register page renders brand name", () => {
    setupWithoutHistory();
    const brandName = screen.getByText(/ultranet/i);
    expect(brandName).toBeInTheDocument();
  });
  test("register form has input field for username", () => {
    setupWithoutHistory();
    const usernameInput = screen.getByLabelText(/username/i);
    expect(usernameInput).toBeInTheDocument();
  });
  test("register form has email field", () => {
    setupWithoutHistory();
    const emailInput = screen.getByLabelText(/email/i);
    expect(emailInput).toBeInTheDocument();
    screen.debug();
  });
  test("register form has field for password", () => {
    setupWithoutHistory();
    const passwordInput = screen.getByLabelText(/password/i);
    expect(passwordInput).toBeInTheDocument();
  });
  test("register form has register button", () => {
    setupWithoutHistory();
    const registerBtn = screen.getByRole("button", { name: /register/i });
    expect(registerBtn).toBeInTheDocument();
  });
});
