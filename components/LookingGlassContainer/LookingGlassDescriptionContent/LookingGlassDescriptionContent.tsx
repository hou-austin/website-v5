import React from "react";
import cx from "classnames";
import { ButtonProps } from "../../shared/Button/Button";
import { getAccentColor } from "../../../utils/styles/color";

type Props = {
  title?: string;
  children?: React.ReactNode;
  pillNodes?: ButtonProps[];
  footerLabel?: string;
};

const LookingGlassDescriptionContent: React.FC<Props> = (props) => {
  const title = props.title;
  const children = props.children;
  const pillNodes = props.pillNodes;
  const footerLabel = props.footerLabel;

  const propagatePillNodes = () => {
    if (pillNodes) {
      return pillNodes.map((pillNode, index) => {
        const { children } = pillNode;
        return (
          // <Button key={`pill-${index}`} color={color}>
          //   {children}
          // </Button>
          <div key={index}>{children}</div>
        );
      });
    }
  };

  return (
    <div>
      <div className="pb-4">
        {title && (
          <div className={cx("font-semibold text-xl", { "pb-2": !!children })}>
            {title}
          </div>
        )}
        {children && (
          <div className={cx("text-sm ", "dark:text-zinc-300")}>{children}</div>
        )}
      </div>
      <div
        className={cx(
          "flex flex-row flex-wrap gap-2 items-center",
          { "border-t pt-4": !!children },
          getAccentColor({ color: "autoS400O10", types: ["border"] })
        )}
      >
        {propagatePillNodes()}
        {footerLabel && <span className={"text-xs"}>{footerLabel}</span>}
      </div>
    </div>
  );
};

export default LookingGlassDescriptionContent;
