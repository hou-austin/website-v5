import React from "react";
import Hero from "../slices/Hero";
import LookingGlass from "../slices/LookingGlass";
import LookingGlassWithPicture from "../slices/LookingGlassWithPicture";
import StrapiButton from "../shared/StrapiButton";
import { HeroSectionSlicesDynamicZone } from "../../types/generated/schema";
import { Maybe } from "@graphql-tools/utils";

type StrapiSlices = HeroSectionSlicesDynamicZone;

type StrapiSlicesArray = Maybe<StrapiSlices>[];

const SLICES: { [key in string]: React.FC<any> } = {
  ComponentSlicesHero: Hero,
  ComponentSlicesLookingGlass: LookingGlass,
  ComponentSlicesLookingGlassWithPicture: LookingGlassWithPicture,
  ComponentSharedButton: StrapiButton,
};

type Props = {
  slices: StrapiSlicesArray;
};

const SliceManager: React.FC<Props> = ({ slices }) => {
  const propagateSlices = () => {
    return slices.map((slice, index) => {
      if (!slice) return null;
      const { __typename } = slice;
      if (!__typename) return null;
      const Slice = SLICES[__typename];

      if (!Slice) {
        return null;
      } else {
        return <Slice key={index} {...slice} />;
      }
    });
  };

  return <>{propagateSlices()}</>;
};

export default SliceManager;
