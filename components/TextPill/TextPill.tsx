import React from "react";
import cx from "classnames";
import { getColoredGlassStyles } from "../../utils/glass";

export type TextPillProps = {
  label?: React.ReactNode;
  color?: GlassColors;
};

const TextPill: React.FC<TextPillProps> = ({ label, color }) => {
  return (
    <div
      className={cx(
        "rounded-full py-1 px-3 text-xs border w-fit font-semibold",
        getColoredGlassStyles({ color, types: ["bg", "border", "text"] })
      )}
    >
      {label}
    </div>
  );
};

export default TextPill;
