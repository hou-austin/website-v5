type StrapiCollectionsHeroSection = {
  attributes: {
    __typename: "HeroSection";
    hero: StrapiSliceHero;
    slices: StrapiSlices[];
    holoImage?: StrapiSharedImage;
  };
};
