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
    <div
      className={cx(
        "sm:grid sm:gap-8 sm:grid-cols-12",
        "flex flex-col relative"
      )}
    >
      <div
        className={cx(
          "flex items-center px-2 w-full h-full shadow-xl rounded-image relative",
          "lg:col-start-8 lg:col-end-13 lg:row-start-1",
          "md:col-start-7 md:col-end-13 md:row-start-1",
          "sm:col-start-6 sm:col-end-13 sm:row-start-1"
        )}
      >
        <Image src={imageURL} alt="showcase image" width={800} height={450} />
      </div>
      <div
        className={
          "sm:col-start-1 sm:col-span-8 sm:row-start-1 sm:top-0 -top-8 relative"
        }
      >
        <div className="flex items-center h-full relative">
          <LookingGlassContainer
            lookingGlassContainerProps={lookingGlassContainerProps}
          >
            {children}
          </LookingGlassContainer>
        </div>
      </div>
    </div>
  );
};

export default DetailedImageShowcase;
