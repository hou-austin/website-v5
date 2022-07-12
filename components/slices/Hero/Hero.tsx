import React from "react";
import cx from "classnames";
import { ComponentSlicesHero } from "../../../types/generated/schema";

const Hero: React.FC<ComponentSlicesHero> = ({ title, description }) => {
  const descriptionElement = (
    <div className={cx("mt-5 text-lg break-words")}>{description}</div>
  );

  return (
    <div className={cx("max-w-7xl mx-auto px-4")}>
      <div className={cx("font-bold text-5xl break-words")}>{title}</div>
      {description && descriptionElement}
    </div>
  );
};

export default Hero;
