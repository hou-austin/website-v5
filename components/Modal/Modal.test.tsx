import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Modal, { Props } from "./Modal";

const mockModalProps: Props = {
  handleToggleModal: jest.fn(),
} as unknown as Props;

describe("Visibility", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should be hidden if user clicks outside of modal content", () => {
    render(
      <Modal {...mockModalProps}>
        <p>Content</p>
      </Modal>
    );

    const modal = screen.getByTestId("modal");
    modal.click();
    expect(mockModalProps.handleToggleModal).toBeCalled();
  });

  test("should be hidden if user clicks on close button", () => {
    render(
      <Modal {...mockModalProps}>
        <p>Content</p>
      </Modal>
    );

    const closeButton = screen.getByTestId("button");
    closeButton.click();
    expect(mockModalProps.handleToggleModal).toBeCalled();
  });

  test("should remain visible if user clicks in content area", () => {
    render(
      <Modal {...mockModalProps}>
        <p>Content</p>
      </Modal>
    );

    const modalContentArea = screen.getByTestId("modalContentArea");
    modalContentArea.click();
    expect(mockModalProps.handleToggleModal).not.toBeCalled();
  });
});
