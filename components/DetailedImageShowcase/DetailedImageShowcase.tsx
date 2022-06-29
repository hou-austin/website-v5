import React from "react";
import Image from "next/future/image";

import LookingGlassContainer from "../LookingGlassContainer";
import cx from "classnames";
import { LookingGlassContainerProps } from "../LookingGlassContainer/LookingGlassContainer";

type Props = {
  children?: React.ReactNode;
  imageURL: string;
  lookingGlassContainerProps: LookingGlassContainerProps;
};

const DetailedImageShowcase: React.FC<Props> = ({
  children,
  imageURL,
  lookingGlassContainerProps,
}) => {
  return (
    <div className={cx("grid grid-cols-12 gap-8")}>
      <div className={cx("col-span-7")}>
        <div className="flex items-center h-full relative">
          <LookingGlassContainer
            lookingGlassContainerProps={lookingGlassContainerProps}
          >
            {children}
          </LookingGlassContainer>
        </div>
      </div>
      <div className={cx("col-span-5 flex items-center")}>
        <Image src={imageURL} className="rounded-lg shadow-xl" />
      </div>
    </div>
  );
};

export default DetailedImageShowcase;
