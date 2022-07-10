type StrapiSharedButton = {
  __typename: "ComponentSharedButton";
  label?: string;
  color: AccentColorStyles;
  icon?: "next" | "previous";
  size: "sm" | "md";
  link?: StrapiSharedLink;
};

type StrapiSharedImage = {
  __typename: "ComponentSharedImage";
  width: number;
  height: number;
  alt?: string;
  image: StrapiGenericImage;
};

type StrapiSharedLink = {
  __typename: "ComponentSharedLink";
  label: string;
  href: string;
  target?: "blank";
  color: AccentColorStyles;
};
