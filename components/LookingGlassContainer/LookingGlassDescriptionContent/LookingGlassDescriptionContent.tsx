import React from "react";
import cx from "classnames";
import TextPill from "../../TextPill";
import { TextPillProps } from "../../TextPill/TextPill";
import { getMonoGlassStyles } from "../../../utils/glass";

type Props = {
  title: string;
  children?: React.ReactNode;
  pillNodes?: TextPillProps[];
};

const LookingGlassDescriptionContent: React.FC<Props> = (props) => {
  const title = props.title;
  const children = props.children;
  const pillNodes = props.pillNodes;

  const propagatePillNodes = () => {
    if (pillNodes) {
      return pillNodes.map((pillNode, index) => {
        const { label, color } = pillNode;
        return <TextPill key={`pill-${index}`} color={color} label={label} />;
      });
    }
  };

  return (
    <div>
      <div className="pb-4">
        <div className={cx("font-semibold text-xl", { "pb-2": !!children })}>
          {title}
        </div>
        <div className={cx("text-sm ", "dark:text-zinc-300")}>{children}</div>
      </div>
      <div
        className={cx(
          "flex flex-row flex-wrap gap-2",
          { "border-t pt-4": !!children },
          getMonoGlassStyles({ types: ["border"] })
        )}
      >
        {propagatePillNodes()}
      </div>
    </div>
  );
};

export default LookingGlassDescriptionContent;
