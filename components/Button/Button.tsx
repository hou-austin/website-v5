import React from "react";
import Link from "next/link";
import cx from "classnames";
import { getAccentColor, GetAccentColorProps } from "../../utils/styles/color";

const GAP_CLASSES = {
  sm: "gap-2",
  md: "gap-4",
};

const PADDING_CLASSES = {
  sm: "px-3 py-1",
  md: "px-4 py-2",
};

const BORDER_CLASSES = {
  sm: "border",
  md: "border-2",
};

const RADIUS_CLASSES = {
  sm: "rounded-sm",
  md: "rounded",
  full: "rounded-full",
};

const FONT_SIZE_CLASSES = {
  sm: "text-xs",
  md: "text-sm",
};

const FONT_WEIGHTS_CLASSES = {
  sm: "font-semibold",
  md: "font-medium",
};

type Sizes = "sm" | "md";

type ButtonOptionalStyles = {
  gapStyle?: Sizes;
  paddingStyle?: Sizes;
  borderStyle?: Sizes;
  radiusStyle: Sizes | "full";
  fontSize?: Sizes;
  fontWeight?: Sizes;
  textTransform?: "uppercase" | "lowercase" | "capitalize";
};

export type ButtonProps = {
  children?: React.ReactNode;
  colorStyle?: GetAccentColorProps;
  buttonStyles?: ButtonOptionalStyles;
  className?: string;
  action?: string | (() => void);
};

const Button: React.FC<ButtonProps> = ({
  children,
  colorStyle = { color: "autoS400O10" },
  buttonStyles,
  className = "",
  action,
}) => {
  const {
    gapStyle = "sm",
    paddingStyle = "sm",
    borderStyle = "sm",
    radiusStyle,
    fontSize = "sm",
    fontWeight = "sm",
    textTransform: textTransformClass,
  } = buttonStyles || {};

  const getClass = (lookup: { [key: string]: string }, propStyle: string) => {
    return Object.keys(lookup).includes(propStyle)
      ? lookup[propStyle as keyof typeof lookup]
      : propStyle;
  };

  const defaultClass = "flex items-center justify-center w-fit";
  const gapClass = getClass(GAP_CLASSES, gapStyle);
  const colorClass = getAccentColor(colorStyle);
  const paddingClass = getClass(PADDING_CLASSES, paddingStyle);
  const borderClass = getClass(BORDER_CLASSES, borderStyle);
  const radiusClass = radiusStyle ? getClass(RADIUS_CLASSES, radiusStyle) : "";
  const fontSizeClass = getClass(FONT_SIZE_CLASSES, fontSize);
  const fontWeightClass = getClass(FONT_WEIGHTS_CLASSES, fontWeight);

  const generatedClasses = [
    defaultClass,
    gapClass,
    colorClass,
    paddingClass,
    borderClass,
    radiusClass,
    fontSizeClass,
    fontWeightClass,
    textTransformClass,
  ];
  const composedClasses = cx(
    className,
    ...(buttonStyles ? generatedClasses : [])
  );

  const button = (
    <button
      className={composedClasses}
      {...(action && typeof action !== "string" && { onClick: action })}
    >
      {children}
    </button>
  );

  if (action && typeof action === "string") {
    return (
      <Link href={action}>
        <a>{button}</a>
      </Link>
    );
  } else {
    return button;
  }
};

export default Button;
