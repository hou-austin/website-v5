import React from "react";
import cx from "classnames";

type Props = {
  children?: React.ReactNode;
};

const LookingGlassContainer: React.FC<Props> = ({ children }) => {
  return (
    <div
      className={cx(
        "px-4 w-full p-4 border rounded-lg flex flex-col shadow-xl backdrop-blur-lg",
        "bg-slate-50/20 border-slate-400/20",
        "dark:bg-black/20 dark:border-slate-50/20"
      )}
    >
      {children}
    </div>
  );
};

export default LookingGlassContainer;
