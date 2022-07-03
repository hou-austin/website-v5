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
    <div className={"grid grid-cols-12 gap-8"}>
      <div className={"col-start-1 col-span-8 row-start-1"}>
        <div className="flex items-center h-full relative">
          <LookingGlassContainer
            lookingGlassContainerProps={lookingGlassContainerProps}
          >
            {children}
          </LookingGlassContainer>
        </div>
      </div>
      <div className={"col-start-8 col-end-13 row-start-1 flex items-center"}>
        <Image
          src={imageURL}
          className="rounded-lg shadow-xl w-full rotate3d-left-sm"
          alt="showcase image"
        />
      </div>
    </div>
  );
};

export default DetailedImageShowcase;
