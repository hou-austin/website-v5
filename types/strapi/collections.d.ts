type StrapiCollections = { data: StrapiCollectionsData[] };
type StrapiCollectionsData = StrapiCollectionsHeroSection;

type StrapiCollectionsHeroSection = {
  attributes: {
    __typename: "HeroSection";
    hero: StrapiSliceHero;
    slices: StrapiSlices[];
    holoImage?: StrapiSharedImage;
  };
};
