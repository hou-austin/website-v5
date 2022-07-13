import React from "react";
import Hero from "../../slices/Hero";
import StrapiImage from "../../shared/StrapiImage";
import SliceManager from "../../SliceManager";
import { getThemeColor } from "../../../utils/styles/color";
import { HeroSection as HeroSectionSchema } from "../../../types/generated/schema";
import cx from "classnames";

type Props = {
  attributes: HeroSectionSchema;
};

const HeroSection: React.FC<Props> = ({
  attributes: { hero, slices, holoImage },
}) => {
  return (
    <div>
      <div className={"relative z-10 mt-8"}>
        <Hero {...hero} />
      </div>
      <div
        className={cx(
          "mt-10 py-8 border-t border-slate-50/20 relative",
          getThemeColor({ color: "auto", types: ["bg"] })
        )}
      >
        <div
          className={
            "relative top-0 max-w-7xl px-4 mx-auto flex flex-col sm:gap-8 gap-4 z-10"
          }
        >
          {slices && <SliceManager slices={slices} />}
        </div>
        {holoImage && (
          <StrapiImage
            {...holoImage}
            className={
              "absolute top-0 max-w-7xl left-0 right-0 mx-auto overflow-hidden"
            }
          />
        )}
      </div>
    </div>
  );
};

export default HeroSection;
