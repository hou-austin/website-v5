import React from "react";
import cx from "classnames";
import { getColoredGlassStyles } from "../../utils/glass";
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
        const { label, color } = tab;
        return (
          <div
            key={`bottom-tab-${index}`}
            className={cx(
              "h-full pt-6 pb-2 px-4 text-sm rounded-lg border backdrop-blur-xl backdrop-saturate-200 box-content flex items-end",
              getColoredGlassStyles({ color: color, types: ["bg", "border"] })
            )}
          >
            <span className={"opacity-0"}>{label}</span>
          </div>
        );
      });
    }
  };

  const propagateBottomTabLabels = () => {
    if (bottomTabs) {
      return bottomTabs.map((tab, index) => {
        const { label, color, href } = tab;
        return (
          <div
            key={`bottom-tab-${index}`}
            className={cx(
              "pt-6 pb-2 px-4 text-sm rounded-lg flex items-end m-px",
              getColoredGlassStyles({ color: color, types: ["text"] })
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
    <div className="relative my-8 w-full">
      <div
        className={cx(
          "px-4 p-4 border rounded-lg flex flex-col shadow-xl backdrop-blur-lg backdrop-saturate-200 relative",
          "bg-slate-50/20 border-slate-400/20",
          "dark:bg-black/20 dark:border-slate-50/20"
        )}
      >
        {children}
      </div>
      <div className={cx("absolute -bottom-[2.2rem] ml-4")}>
        <div className={cx("flex gap-2 relative")}>
          {propagateBottomTabLabels()}
        </div>
      </div>
      <div className={cx("absolute top-0 -z-10 ml-4 h-full")}>
        <div className={cx("flex gap-2 relative h-full")}>
          {propagateBottomTabs()}
        </div>
      </div>
    </div>
  );
};

export default LookingGlassContainer;
