import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Button from "./";

const BUTTON_TEXT = "Button Text";

test("loads and displays text", () => {
  render(<Button>{BUTTON_TEXT}</Button>);

  expect(screen.getByTestId("button")).toBeDefined();
});

describe("User click", () => {
  test("should have a link if href is provided", () => {
    render(<Button action={"/test"}>Click me</Button>);

    const buttonLinkWrapper = screen.getByTestId("button-link-wrapper");
    expect(buttonLinkWrapper).toBeDefined();
    expect(buttonLinkWrapper).toHaveAttribute("href", "/test");
  });
});
