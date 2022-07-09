import React from "react";
import Button from "../../Button";

const StrapiButton: React.FC<StrapiSharedButton> = ({
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
