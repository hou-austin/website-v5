type StrapiPages = {
  data: {
    attributes: {
      __typename: string;
      [key: string]: StrapiSlicesArray | StrapiCollections;
    };
  };
};
