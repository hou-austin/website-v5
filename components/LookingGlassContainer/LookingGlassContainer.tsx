import React from "react";
import cx from "classnames";

type Props = {
  children?: React.ReactNode;
};

const LookingGlassContainer: React.FC<Props> = ({ children }) => {
  return (
    <div
      className={cx(
        "rounded-xl p-8 border backdrop-blur-md w-fit",
        "bg-slate-200/80 border-slate-100/10",
        "dark:bg-slate-700/60 dark:border-slate-900/10"
      )}
    >
      {children}
    </div>
  );
};

export default LookingGlassContainer;
