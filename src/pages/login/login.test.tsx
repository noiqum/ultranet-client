import { screen, render } from "@testing-library/react";
import userevent from "@testing-library/user-event";
import Login from "./login";
import { MemoryRouter } from "react-router-dom";

function setup() {
  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );
}

describe("Login", () => {
  test("header section renders brand name", () => {
    setup();
    const brand = screen.getByText(/ultranet/i);
    expect(brand).toBeInTheDocument();
  });
  test("header section renders brand motto", () => {
    setup();
    const motto = screen.getByText(/broaden your life/i);
    expect(motto).toBeInTheDocument();
  });

  test("form has email input", () => {
    setup();
    const email = screen.getByLabelText(/email/i);
    expect(email).toBeInTheDocument();
  });
  test("form has password input", () => {
    setup();
    const password = screen.getByLabelText(/password/i);
    expect(password).toBeInTheDocument();
  });
  test("form has login button", () => {
    setup();
    const loginBtn = screen.getByRole("button", { name: /login/i });
    expect(loginBtn).toBeInTheDocument();
  });
  test("page renders register button", () => {
    setup();
    const registerBtn = screen.getByRole("button", { name: /register/i });
    expect(registerBtn).toBeInTheDocument();
  });
});
