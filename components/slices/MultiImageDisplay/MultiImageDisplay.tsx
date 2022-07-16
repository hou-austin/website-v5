import React from "react";
import { ComponentSlicesMultiImageDisplay } from "../../../types/generated/schema";
import StrapiImage from "../../shared/StrapiImage";
import cx from "classnames";

const MultiImageDisplay: React.FC<ComponentSlicesMultiImageDisplay> = ({
  images,
  allowExpand,
}) => {
  const propagateImages = () => {
    if (!images) return;
    return images.map((image, index) => {
      if (image) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { allowExpand: imageAllowExpand, ...imageRest } = image;
        return (
          <div key={index}>
            <StrapiImage
              {...imageRest}
              {...(allowExpand && { allowExpand: true })}
              modalClassName="rounded-lg drop-shadow-2x"
              className="rounded-lg drop-shadow-2x"
            />
          </div>
        );
      }
    });
  };
  const imageElements = propagateImages();

  return (
    <div
      className={cx(
        "grid gap-4 sm:gap-8 mx-auto sm:flex-row",
        {
          "grid-cols-1": images.length === 1,
        },
        {
          "md:grid-cols-2 sm:grid-cols-1": images.length === 2,
        },
        {
          "lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1": images.length >= 3,
        }
      )}
    >
      {imageElements}
    </div>
  );
};

export default MultiImageDisplay;
