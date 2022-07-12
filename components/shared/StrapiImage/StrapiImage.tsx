import React from "react";
import Image from "next/future/image";
import { ComponentSharedImage } from "../../../types/generated/schema";

type Props = ComponentSharedImage & {
  className?: string;
};

const StrapiImage: React.FC<Props> = ({
  width,
  height,
  alt = "",
  image,
  className = "",
}) => {
  if (!image?.data?.attributes?.url) return null;

  return (
    <Image
      src={image?.data?.attributes?.url}
      width={width}
      height={height}
      alt={alt as string}
      className={className}
    />
  );
};

export default StrapiImage;
