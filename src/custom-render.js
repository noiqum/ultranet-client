import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { createMemoryHistory } from 'history'
import { ApolloProvider } from "@apollo/client";
import client from "./apollo/client";
const history = createMemoryHistory()
const Wrapper = ({ children }) => {
  return (
    <ApolloProvider client={client}>
      <Router history={history} >{children}</Router >
    </ApolloProvider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: Wrapper, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };