import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Button from "./";

const BUTTON_TEXT = "Button Text";

test("loads and displays text", () => {
  render(<Button>{BUTTON_TEXT}</Button>);

  expect(screen.getByTestId("button")).toBeDefined();
});

describe("Action", () => {
  test("should not have a link if empty", () => {
    render(<Button>{BUTTON_TEXT}</Button>);

    let success = true;

    try {
      screen.getByTestId("button-link-wrapper");
      success = false;
    } catch (error) {
      expect(error).toBeDefined();
    }

    if (!success) {
      throw new Error("Button link wrapper was found");
    }
  });

  test("should have a link if it's a string", () => {
    render(<Button action={"/test"}>{BUTTON_TEXT}</Button>);

    const buttonLinkWrapper = screen.getByTestId("button-link-wrapper");
    expect(buttonLinkWrapper).toBeDefined();
    expect(buttonLinkWrapper).toHaveAttribute("href", "/test");
  });
});
