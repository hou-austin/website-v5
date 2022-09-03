import { act, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

import StrapiImage from "./";
import { Props } from "./StrapiImage";

const mockStrapiImageData: Props = {
  width: 500,
  height: 1000,
  alt: "test image",
  allowExpand: false,
  className: "",
  modalClassName: "",
  showLoading: true,
  id: "12345",
  image: {
    data: {
      attributes: {
        url: "https://website-v5-images.s3.us-west-1.amazonaws.com/vectron_1_alt_e1674e909f.png?width=3144&height=1768",
      },
    },
  },
} as Props;

describe("AllowExpand property", () => {
  test("when true will render modal on click", async () => {
    const thisMockStrapiImageProps = {
      ...mockStrapiImageData,
      allowExpand: true,
    };
    render(<StrapiImage {...thisMockStrapiImageProps} />);

    const image = screen.getByTestId("strapiImageWrapper");
    act(() => {
      image.click();
    });

    await waitFor(() => {
      let success = false;

      try {
        const modal = screen.getByTestId("modal");
        expect(modal).toBeDefined();
        success = true;
      } catch {}

      if (!success) {
        throw new Error("Modal was not found");
      }
    });
  });

  test("when false will not render modal on click", async () => {
    render(<StrapiImage {...mockStrapiImageData} />);

    const image = screen.getByTestId("strapiImageWrapper");
    act(() => {
      image.click();
    });

    await waitFor(() => {
      let success = false;

      try {
        screen.getByTestId("modal");
      } catch {
        success = true;
      }

      if (!success) {
        throw new Error("Modal was found");
      }
    });
  });
});
