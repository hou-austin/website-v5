type StrapiSharedButton = {
  __typename: "ComponentSharedButton";
  label?: string;
  color: AccentColorStyles;
  icon?: "next" | "previous";
  size: "sm" | "md";
  link?: StrapiSharedLink;
};
