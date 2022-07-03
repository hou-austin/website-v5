import React from "react";
import cx from "classnames";
import { getColoredGlassStyles } from "../../utils/glass";
import Link from "next/link";

export type ButtonProps = {
  children?: React.ReactNode;
  color?: GlassColors;
  href?: string;
  size?: "sm" | "md";
};

const Button: React.FC<ButtonProps> = ({
  children,
  color,
  href,
  size = "sm",
}) => {
  const getSizeClasses = () => {
    switch (size) {
      case "sm":
        return "py-1 px-3 text-xs border";
      case "md":
        return "py-2 px-4 text-sm border-2";
      default:
        return "";
    }
  };

  const button = (
    <div
      className={cx(
        "rounded-full font-semibold flex flex-row items-center gap-1 w-fit",
        getSizeClasses(),
        getColoredGlassStyles({ color, types: ["bg", "border", "text"] })
      )}
    >
      {children}
    </div>
  );

  if (href) {
    return (
      <Link href={href}>
        <a>{button}</a>
      </Link>
    );
  }

  return button;
};

export default Button;
