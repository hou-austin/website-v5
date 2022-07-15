import React from "react";
import cx from "classnames";
import { getAccentColor, getThemeColor } from "../../../utils/styles/color";
import StrapiButton from "../../shared/StrapiButton";
import StrapiLink from "../../shared/StrapiLink";
import { ComponentSlicesLookingGlass } from "../../../types/generated/schema";
import Slice from "../../collections/Slice";
import { HiChevronDown, HiChevronLeft } from "react-icons/hi";
import Button from "../../Button";

const LookingGlass: React.FC<ComponentSlicesLookingGlass> = ({
  title,
  description,
  buttons,
  floatingLinks,
  collapsible = false,
  dropdownSlices,
}) => {
  const [isDropDownOpen, setIsDropDownOpen] = React.useState(true);

  const toggleDropdown = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };

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
  const dropDownButton = (
    <Button
      action={toggleDropdown}
      buttonStyles={{
        radiusStyle: "full",
        borderStyle: "md",
        fontSize: "md",
        paddingStyle: "smEqual",
      }}
      className="cursor-pointer"
    >
      <div className={cx("duration-500", { "rotate-90": !isDropDownOpen })}>
        <HiChevronDown />
      </div>
    </Button>
  );
  const titleElement =
    title &&
    (collapsible ? (
      <div className="grid grid-cols-[1fr_auto] grid-rows-1 w-full">
        <h3 className="font-semibold text-xl">{title}</h3>
        {dropDownButton}
      </div>
    ) : (
      <h3 className="font-semibold text-xl">{title}</h3>
    ));
  const descriptionElement = description && (
    <p className="text-sm">{description}</p>
  );
  const buttonElements = propagateButtons();
  const floatingLinkElements = propagateFloatingLinks();

  return (
    <div
      className={cx("w-full grid grid-cols-1 grid-rows-1", {
        "mb-8": !floatingLinks || floatingLinks.length > 0,
      })}
    >
      {dropdownSlices?.data?.attributes?.slices && (
        <div
          className={cx(
            "overflow-y-auto overflow-x-hidden border shadow-inner -mt-8 rounded-lg relative -z-10",
            "max-h-[80rem] duration-500 transition-[max-height]",
            getThemeColor({
              color: "autoZincS900O50S200O50",
              types: ["bg"],
            }),
            getAccentColor({ color: "autoS400O10", types: ["border"] }),
            {
              "max-h-[1rem]": !isDropDownOpen,
            }
          )}
        >
          <div
            className={cx(
              "p-4",
              {
                "pt-20": !floatingLinks || floatingLinks.length > 0,
              },
              {
                "pt-12": !(!floatingLinks || floatingLinks.length > 0),
              }
            )}
          >
            <Slice slices={dropdownSlices.data.attributes.slices} />
          </div>
        </div>
      )}
      <div
        className={cx(
          "w-full grid grid-cols-1 grid-rows-1 safari-transform-fix row-start-1 row-end-1 col-start-1 col-end-1 mb-auto"
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
          <div className={cx("top-0 h-full col-start-1 row-start-1 row-end-1")}>
            <div className={cx("flex gap-2 h-full")}>
              {floatingLinkElements}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LookingGlass;
