import React from "react";
import cx from "classnames";
import { getAccentColor, getThemeColor } from "../../../utils/styles/color";
import StrapiButton from "../../shared/StrapiButton";
import StrapiLink from "../../shared/StrapiLink";
import { ComponentSlicesLookingGlass } from "../../../types/generated/schema";

const LookingGlass: React.FC<ComponentSlicesLookingGlass> = ({
  title,
  description,
  buttons,
  floatingLinks,
}) => {
  const propagateButtons = () => {
    if (buttons?.length === 0 || !buttons) return;

    const buttonsMap = buttons.map((button, index) => {
      if (button) return <StrapiButton {...button} key={index} />;
      return null;
    });

    return (
      <div
        className={cx(
          "flex flex-row flex-wrap gap-2 items-center",
          { "border-t pt-4": description || title },
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
      if (!floatingLink) return null;
      const { label, href, color } = floatingLink;

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
          {href ? <StrapiLink {...floatingLink} /> : <span>{label}</span>}
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
      className={cx(
        "w-full grid grid-cols-1 grid-rows-1 safari-transform-fix",
        {
          "mb-8": !!floatingLinks,
        }
      )}
    >
      <div
        className={cx(
          "px-4 p-4 border rounded-lg col-start-1 row-start-1 flex flex-col gap-4 shadow-xl backdrop-blur-lg relative z-10",
          getThemeColor({ color: "autoTransparent" })
        )}
      >
        {titleElement}
        {descriptionElement}
        {buttonElements}
      </div>
      {floatingLinks && (
        <div
          className={cx(
            "top-0 h-full row-start-1 col-start-1 row-start-1 row-end-1"
          )}
        >
          <div className={cx("flex gap-2 h-full")}>{floatingLinkElements}</div>
        </div>
      )}
    </div>
  );
};

export default LookingGlass;
