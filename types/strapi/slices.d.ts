type StrapiSlices =
  | StrapiSliceHero
  | StrapiSliceLookingGlass
  | StrapiSliceLookingGlassWithPicture;

type StrapiSlicesArray = StrapiSlices[];

type StrapiSliceHero = {
  __typename: "ComponentSlicesHero";
  title: string;
  description?: string;
};

type StrapiSliceLookingGlass = {
  __typename: "ComponentSlicesLookingGlass";
  title?: string;
  description?: string;
  buttons?: StrapiSharedButton[];
  floatingLinks?: StrapiSharedLink[];
};

type StrapiSliceLookingGlassWithPicture = {
  __typename: "ComponentSlicesLookingGlassWithPicture";
  lookingGlass: StrapiSliceLookingGlass;
  image: StrapiSharedImage;
  imagePosition: "left" | "right";
};
