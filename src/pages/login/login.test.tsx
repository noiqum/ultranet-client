import { screen, render } from "@testing-library/react";
import userevent from "@testing-library/user-event";
import Login from "./login";

describe("Login", () => {
  test("header section renders brand name", () => {
    render(<Login />);
    const brand = screen.getByText(/ultranet/i);
    expect(brand).toBeInTheDocument();
  });
  test("header section renders brand motto", () => {
    render(<Login />);
    const motto = screen.getByText(/broaden your life/i);
    expect(motto).toBeInTheDocument();
  });

  test("form has email input", () => {
    render(<Login />);
    const email = screen.getByLabelText(/email/i);
    expect(email).toBeInTheDocument();
  });
  test("form has password input", () => {
    render(<Login />);
    const password = screen.getByLabelText(/password/i);
    expect(password).toBeInTheDocument();
  });
  test("form has login button", () => {
    render(<Login />);
    const loginBtn = screen.getByRole("button", { name: /login/i });
    expect(loginBtn).toBeInTheDocument();
  });
  test("page renders register button", () => {
    render(<Login />);
    const registerBtn = screen.getByRole("button", { name: /register/i });
    expect(registerBtn).toBeInTheDocument();
  });
});