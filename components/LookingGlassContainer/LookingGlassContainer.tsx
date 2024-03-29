import React from "react";
import cx from "classnames";
import { getAccentColor, getThemeColor } from "../../utils/styles/color";
import Link from "next/link";

type BottomTabProps = {
  label: string;
  color: AccentColorStyles;
  href?: string;
};

export type LookingGlassContainerProps = {
  bottomTabs?: BottomTabProps[];
};

type Props = {
  children?: React.ReactNode;
  lookingGlassContainerProps?: LookingGlassContainerProps;
};

const LookingGlassContainer: React.FC<Props> = ({
  children,
  lookingGlassContainerProps,
}) => {
  const bottomTabs = lookingGlassContainerProps?.bottomTabs;

  const propagateBottomTabs = () => {
    if (bottomTabs) {
      return bottomTabs.map((tab, index) => {
        const { label, color, href } = tab;
        return (
          <div
            key={`bottom-tab-${index}`}
            className={cx(
              "h-full pt-[1.6rem] pb-2 px-4 text-sm rounded-lg border box-content flex items-end hover-move-down duration-500 sm:w-fit justify-center",
              "w-full",
              getAccentColor({ color })
            )}
          >
            {href ? (
              <Link href={href}>
                <a target="_blank">{label}</a>
              </Link>
            ) : (
              <span>{label}</span>
            )}
          </div>
        );
      });
    }
  };

  return (
    <div
      className={cx("w-full grid grid-cols-1 safari-transform-fix", {
        "my-4": !!bottomTabs,
      })}
    >
      <div
        className={cx(
          "px-4 p-4 border rounded-lg col-start-1 row-start-1 flex flex-col shadow-xl backdrop-blur-lg",
          getThemeColor({ color: "autoTransparent" })
        )}
      >
        {children}
      </div>
      {bottomTabs && (
        <div className={cx("top-0 h-full row-start-1 col-start-1")}>
          <div className={cx("flex gap-2 h-full")}>{propagateBottomTabs()}</div>
        </div>
      )}
    </div>
  );
};

export default LookingGlassContainer;
