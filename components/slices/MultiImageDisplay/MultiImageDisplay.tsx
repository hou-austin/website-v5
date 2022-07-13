import React from "react";
import { ComponentSlicesMultiImageDisplay } from "../../../types/generated/schema";
import StrapiImage from "../../shared/StrapiImage";
import cx from "classnames";

const MultiImageDisplay: React.FC<ComponentSlicesMultiImageDisplay> = ({
  images,
}) => {
  const propagateImages = () => {
    if (!images) return;
    return images.map((image, index) => {
      if (image)
        return (
          <StrapiImage
            {...image}
            className={"rounded-lg drop-shadow-2x1"}
            key={index}
          />
        );
    });
  };
  const imageElements = propagateImages();

  return (
    <div className={cx("grid grid-cols-3 gap-2 max-w-7xl")}>
      {imageElements}
    </div>
  );
};

export default MultiImageDisplay;
