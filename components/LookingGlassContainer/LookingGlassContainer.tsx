import React from "react";
import cx from "classnames";
import { getColoredGlassStyles, getMonoGlassStyles } from "../../utils/glass";
import Link from "next/link";

type BottomTabProps = {
  label: string;
  color: GlassColors;
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
  const bottomTabs = lookingGlassContainerProps?.bottomTabs ?? [];

  const propagateBottomTabs = () => {
    if (bottomTabs) {
      return bottomTabs.map((tab, index) => {
        const { label, color, href } = tab;
        return (
          <div
            key={`bottom-tab-${index}`}
            className={cx(
              "h-full pt-[1.6rem] pb-2 px-4 text-sm rounded-lg border backdrop-blur-xl backdrop-saturate-200 box-content flex items-end hover-move-down duration-500",
              getColoredGlassStyles({ color })
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
    <div className={cx("w-full grid grid-cols-1", { "my-8": !bottomTabs })}>
      <div
        className={cx(
          "px-4 p-4 border rounded-lg col-start-1 row-start-1 flex flex-col shadow-xl backdrop-blur-lg backdrop-saturate-200 relative z-10",
          getMonoGlassStyles()
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
