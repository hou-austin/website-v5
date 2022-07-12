import React from "react";
import Button from "../../Button";
import { ComponentSharedButton } from "../../../types/generated/schema";

const StrapiButton: React.FC<ComponentSharedButton> = ({
  label = "",
  color,
  icon,
  size,
  link,
}) => {
  return (
    <Button
      colorStyle={{ color }}
      buttonStyles={{
        gapStyle: size,
        paddingStyle: size,
        borderStyle: size,
        radiusStyle: "full",
        fontSize: size,
        fontWeight: size,
      }}
      action={link?.href}
      {...(icon && { icon })}
    >
      {label}
    </Button>
  );
};

export default StrapiButton;
