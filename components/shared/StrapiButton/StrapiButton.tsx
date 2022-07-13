import React from "react";
import Button from "../../Button";
import { ComponentSharedButton } from "../../../types/generated/schema";
import Link from "next/link";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const StrapiButton: React.FC<ComponentSharedButton> = ({
  label = "",
  color,
  icon,
  size,
  link,
  position,
}) => {
  const buttonComponent = (
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
    >
      {icon === "previous" && <HiChevronLeft />}
      {label}
      {icon === "next" && <HiChevronRight />}
    </Button>
  );

  if (link) {
    const { href, target } = link;
    return (
      <Link href={href}>
        <a
          target={`${target === "blank" ? "_blank" : ""}`}
          {...(position === "center" && {
            className: "mx-auto cursor-pointer",
          })}
        >
          {buttonComponent}
        </a>
      </Link>
    );
  }

  return <>{buttonComponent}</>;
};

export default StrapiButton;
