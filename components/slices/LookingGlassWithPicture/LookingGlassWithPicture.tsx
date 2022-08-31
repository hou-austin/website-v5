import React from "react";
import cx from "classnames";
import LookingGlass from "../LookingGlass";
import StrapiImage from "../../shared/StrapiImage";
import { ComponentSlicesLookingGlassWithPicture } from "../../../types/generated/schema";

const IMAGE_POSITION = {
  left: [
    "md:col-start-1 md:col-end-7 md:row-start-1",
    "sm:col-start-1 sm:col-end-8 sm:row-start-1",
  ],
  right: [
    "md:col-start-8 md:col-end-13 md:row-start-1",
    "sm:col-start-7 sm:col-end-13 sm:row-start-1",
  ],
};

const LOOKING_GLASS_POSITION = {
  left: "sm:col-start-8 sm:col-span-12 sm:row-start-1 sm:top-0 relative md:col-start-7",
  right:
    "sm:col-start-1 sm:col-span-6 sm:row-start-1 sm:top-0 relative md:col-span-7",
};

const LookingGlassWithPicture: React.FC<
  ComponentSlicesLookingGlassWithPicture
> = ({ lookingGlass, image, imagePosition }) => {
  const defaultImagePositionClasses = "relative sm:top-0 top-8";
  const imagePositionClasses = IMAGE_POSITION[imagePosition].join(" ");
  const lookingGlassPositionClasses = LOOKING_GLASS_POSITION[imagePosition];

  return (
    <div
      className={cx(
        "sm:grid sm:gap-8 sm:grid-cols-12 sm:mt-0 -mt-8",
        "flex flex-col relative gap-0"
      )}
    >
      <div
        className={cx(
          "flex items-center justify-center",
          imagePositionClasses,
          defaultImagePositionClasses
        )}
      >
        <StrapiImage
          {...image}
          className={"rounded-lg drop-shadow-2xl"}
          modalClassName="rounded-lg drop-shadow-2xl"
        />
      </div>
      <div className={cx("flex items-center", lookingGlassPositionClasses)}>
        {lookingGlass && <LookingGlass {...lookingGlass} />}
      </div>
    </div>
  );
};

export default LookingGlassWithPicture;
