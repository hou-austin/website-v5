import React from "react";

import LookingGlassContainer from "../LookingGlassContainer";
import cx from "classnames";

type Props = {
  children?: React.ReactNode;
  imageURL: string;
};

const DetailedImageShowcase: React.FC<Props> = ({ children, imageURL }) => {
  return (
    <div className={cx("grid grid-cols-12 gap-8")}>
      <div className={cx("col-span-6")}>
        <div className="flex items-center h-full">
          <LookingGlassContainer>{children}</LookingGlassContainer>
        </div>
      </div>
      <div className={cx("col-span-6 p-4 overflow-hidden")}>
        <picture>
          <source srcSet={imageURL} />
          <img src={imageURL} className="rounded-lg shadow-xl" />
        </picture>
      </div>
    </div>
  );
};

export default DetailedImageShowcase;
