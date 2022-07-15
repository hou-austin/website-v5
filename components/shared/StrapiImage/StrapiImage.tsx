import React from "react";
import Image from "next/image";
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
  priority = false,
}) => {
  if (!image?.data?.attributes?.url) return null;

  return (
    <div className={className}>
      <Image
        src={image?.data?.attributes?.url}
        width={width}
        height={height}
        alt={alt || ""}
        {...(priority && { priority })}
      />
    </div>
  );
};

export default StrapiImage;
