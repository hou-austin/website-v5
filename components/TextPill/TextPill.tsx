import React from "react";
import cx from "classnames";
import { getColoredGlassStyles } from "../../utils/glass";

type Props = {
  children?: React.ReactNode;
  color?: GlassColors;
};

const TextPill: React.FC<Props> = ({ children, color }) => {
  return (
    <div
      className={cx(
        "rounded-full py-1 px-3 text-xs border w-fit font-semibold",
        getColoredGlassStyles({ color, types: ["bg", "border", "text"] })
      )}
    >
      {children}
    </div>
  );
};

export default TextPill;
