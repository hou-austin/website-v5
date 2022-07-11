import React from "react";
import Hero from "../slices/Hero";
import LookingGlass from "../slices/LookingGlass";
import LookingGlassWithPicture from "../slices/LookingGlassWithPicture";

const SLICES: {
  [key in StrapiSlices["__typename"]]: React.FC<
    Extract<StrapiSlices, { __typename: key }>
  >;
} = {
  ComponentSlicesHero: Hero,
  ComponentSlicesLookingGlass: LookingGlass,
  ComponentSlicesLookingGlassWithPicture: LookingGlassWithPicture,
};

type Props = {
  slices: StrapiSlicesArray;
};

const SliceManager: React.FC<Props> = ({ slices }) => {
  const propagateSlices = () => {
    return slices.map((slice: StrapiSlices, index) => {
      const { __typename } = slice;
      const Slice = SLICES[__typename] as React.FC<
        Extract<StrapiSlices, { __typename: typeof slice.__typename }>
      >;

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
