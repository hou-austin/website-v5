import React from "react";
import cx from "classnames";
import { getAccentColor, getThemeColor } from "../../../utils/styles/color";
import Button from "../../Button";
import Link from "next/link";

const LookingGlass: React.FC<StrapiSliceLookingGlass> = ({
  title,
  description,
  buttons,
  floatingLinks,
}) => {
  const propagateButtons = () => {
    if (!buttons) return;

    const buttonsMap = buttons.map((button, index) => {
      const { label, color, icon, size, link } = button;

      return (
        <Button
          key={index}
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
        >
          {label}
        </Button>
      );
    });

    return (
      <div
        className={cx(
          "flex flex-row flex-wrap gap-2 items-center",
          { "border-t pt-4": !description && !title },
          getAccentColor({ color: "autoS400O10", types: ["border"] })
        )}
      >
        {buttonsMap}
      </div>
    );
  };

  const propagateFloatingLinks = () => {
    if (!floatingLinks) return;

    return floatingLinks.map((floatingLink, index) => {
      const { label, href, target, color } = floatingLink;

      return (
        <div
          key={index}
          className={cx(
            "h-full pt-[1.6rem] pb-2 px-4 text-sm rounded-lg border box-content flex items-end sm:w-fit justify-center",
            "w-full",
            "hover-move-down duration-500",
            getAccentColor({ color })
          )}
        >
          {href ? (
            <Link href={href}>
              <a target={target === "blank" ? "_blank" : ""}>{label}</a>
            </Link>
          ) : (
            <span>{label}</span>
          )}
        </div>
      );
    });
  };

  const titleElement = title && (
    <h3 className="font-semibold text-xl">{title}</h3>
  );
  const descriptionElement = description && (
    <p className="text-sm">{description}</p>
  );
  const buttonElements = propagateButtons();
  const floatingLinkElements = propagateFloatingLinks();

  return (
    <div
      className={cx("w-full grid grid-cols-1 safari-transform-fix", {
        "my-4": !!floatingLinks,
      })}
    >
      <div
        className={cx(
          "px-4 p-4 border rounded-lg col-start-1 row-start-1 flex flex-col shadow-xl backdrop-blur-lg relative z-10",
          getThemeColor({ color: "autoTransparent" })
        )}
      >
        {titleElement}
        {descriptionElement}
        {buttonElements}
      </div>
      {floatingLinks && (
        <div className={cx("top-0 h-full row-start-1 col-start-1")}>
          <div className={cx("flex gap-2 h-full")}>{floatingLinkElements}</div>
        </div>
      )}
    </div>
  );
};

export default LookingGlass;
