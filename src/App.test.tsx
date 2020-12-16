import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders hello", () => {
  render(<App />);
  const titleHello = screen.getByText(/hello/i);
  expect(titleHello).toBeInTheDocument();
});
