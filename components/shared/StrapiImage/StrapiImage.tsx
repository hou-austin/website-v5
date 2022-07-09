import React from "react";
import Image from "next/future/image";

type Props = StrapiSharedImage & {
  className?: string;
};

const StrapiImage: React.FC<Props> = ({
  width,
  height,
  alt = "",
  image,
  className = "",
}) => {
  return (
    <Image
      src={image.url}
      width={width}
      height={height}
      alt={alt}
      className={className}
    />
  );
};

export default StrapiImage;
