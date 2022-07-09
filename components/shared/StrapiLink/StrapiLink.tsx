import React from "react";
import CustomLink from "../../CustomLink";
import { GetAccentColorProps } from "../../../utils/styles/color";

const StrapiLink: React.FC<StrapiSharedLink> = ({
  label,
  href,
  target,
  color,
}) => {
  const colorStyle: GetAccentColorProps = { color, types: ["text"] };

  return (
    <CustomLink href={href} target={target} colorStyle={colorStyle}>
      {label}
    </CustomLink>
  );
};

export default StrapiLink;
