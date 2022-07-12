import React from "react";
import CustomLink from "../../CustomLink";
import { GetAccentColorProps } from "../../../utils/styles/color";
import { ComponentSharedLink } from "../../../types/generated/schema";

const StrapiLink: React.FC<ComponentSharedLink> = ({
  label,
  href,
  target,
  color,
}) => {
  const colorStyle: GetAccentColorProps = { color, types: ["text"] };

  return (
    <CustomLink href={href} colorStyle={colorStyle} {...(target && { target })}>
      {label}
    </CustomLink>
  );
};

export default StrapiLink;
