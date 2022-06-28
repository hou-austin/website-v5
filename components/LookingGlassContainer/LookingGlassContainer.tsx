import React from "react";
import cx from "classnames";

type Props = {
  children?: React.ReactNode;
};

const LookingGlassContainer: React.FC<Props> = ({ children }) => {
  return (
    <div
      className={cx(
        "rounded-xl p-8 border w-full",
        "bg-slate-100 border-slate-100/10",
        "dark:bg-zinc-900 dark:border-slate-900/10"
      )}
    >
      <div className={cx("rounded-sm p-8 bg-gray-900")}>{children}</div>
    </div>
  );
};

export default LookingGlassContainer;
