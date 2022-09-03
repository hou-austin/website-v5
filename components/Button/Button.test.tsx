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

  test("should make counter go up after click", () => {
    let counter = 0;
    const count = () => {
      counter += 1;
    };
    render(<Button action={count}>{BUTTON_TEXT}</Button>);

    const button = screen.getByTestId("button");
    button.click();
    expect(counter).toBe(1);
  });
});
