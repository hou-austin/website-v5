import React from "react";
import Hero from "../../slices/Hero";
import StrapiImage from "../../shared/StrapiImage";
import SliceManager from "../../SliceManager";
import { getThemeColor } from "../../../utils/styles/color";
import cx from "classnames";

const HeroSection: React.FC<StrapiCollectionsHeroSection> = ({
  attributes: { hero, slices, holoImage },
}) => {
  return (
    <>
      <div className={"relative z-10 mt-8"}>
        <Hero {...hero} />
      </div>
      <div
        className={cx(
          "mt-10 py-8 border-t border-slate-50/20 relative",
          getThemeColor({ color: "auto", types: ["bg"] })
        )}
      >
        {holoImage && (
          <StrapiImage
            {...holoImage}
            className={
              "absolute top-0 max-w-7xl left-0 right-0 mx-auto overflow-hidden"
            }
          />
        )}
        <div
          className={
            "top-0 max-w-7xl px-4 mx-auto flex flex-col sm:gap-8 gap-4 z-10"
          }
        >
          <SliceManager slices={slices} />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
