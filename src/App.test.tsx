import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import App from "./App";
import { MemoryRouter, Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo/client";

afterEach(cleanup);
test("renders hello", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const titleHello = screen.queryByText(/hello/i);
  expect(titleHello).toBeNull();
});
test("renders App unmatched routes", () => {
  const history = createMemoryHistory();
  history.push("/some-unmatched-routes");
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/main page/i)).toBeInTheDocument();
});
test("renders login page with route /login", () => {
  const history = createMemoryHistory();
  history.push("/login");
  render(
    <Router history={history}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Router>
  );
  const loginBtn = screen.getByRole("button", { name: /login/i });
  expect(loginBtn).toBeInTheDocument();
});
