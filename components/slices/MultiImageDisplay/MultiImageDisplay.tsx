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
      if (image) {
        return (
          <div key={index}>
            <StrapiImage
              {...image}
              className="rounded-lg drop-shadow-2x max-h-60 w-auto"
            />
          </div>
        );
      }
    });
  };
  const imageElements = propagateImages();

  return <div className={cx("flex gap-8 mx-auto")}>{imageElements}</div>;
};

export default MultiImageDisplay;
