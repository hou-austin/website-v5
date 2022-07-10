import React from "react";
import cx from "classnames";
import LookingGlass from "../LookingGlass";
import StrapiImage from "../../shared/StrapiImage";

const IMAGE_POSITION = {
  left: [
    "lg:col-start-1 lg:col-end-6 lg:row-start-1",
    "md:col-start-1 md:col-end-7 md:row-start-1",
    "sm:col-start-1 sm:col-end-8 sm:row-start-1",
  ],
  right: [
    "lg:col-start-8 lg:col-end-13 lg:row-start-1",
    "md:col-start-7 md:col-end-13 md:row-start-1",
    "sm:col-start-6 sm:col-end-13 sm:row-start-1",
  ],
};

const LOOKING_GLASS_POSITION = {
  left: "sm:col-start-4 sm:col-span-13 sm:row-start-1 sm:top-0 -top-8 relative",
  right: "sm:col-start-1 sm:col-span-8 sm:row-start-1 sm:top-0 -top-8 relative",
};

const LookingGlassWithPicture: React.FC<StrapiSliceLookingGlassWithPicture> = ({
  lookingGlass,
  image,
  imagePosition,
}) => {
  const imagePositionClasses = IMAGE_POSITION[imagePosition].join(" ");
  const lookingGlassPositionClasses = LOOKING_GLASS_POSITION[imagePosition];

  return (
    <div
      className={cx(
        "sm:grid sm:gap-8 sm:grid-cols-12",
        "flex flex-col relative"
      )}
    >
      <div className={cx("flex items-center", imagePositionClasses)}>
        <StrapiImage {...image} className={"rounded-lg drop-shadow-2xl"} />
      </div>
      <div className={cx("flex items-center", lookingGlassPositionClasses)}>
        <LookingGlass {...lookingGlass} />
      </div>
    </div>
  );
};

export default LookingGlassWithPicture;
