import React from "react";
import HeroSection from "../collections/HeroSection";

const COLLECTIONS: {
  [key in StrapiCollectionsData["attributes"]["__typename"]]: React.FC<
    Extract<StrapiCollectionsData, { attributes: { __typename: key } }>
  >;
} = {
  HeroSection: HeroSection,
};

type Props = {
  collection: StrapiCollections;
};

const CollectionManager: React.FC<Props> = ({ collection }) => {
  const { data } = collection;

  const propagateCollections = () => {
    return Object.entries(data).map((collectionItem, index) => {
      const { attributes: collectionItemContent } = collectionItem[1];

      const { __typename } = collectionItemContent;
      const Collection = COLLECTIONS[__typename] as React.FC<
        Extract<
          StrapiCollectionsData,
          {
            attributes: { __typename: typeof collectionItemContent.__typename };
          }
        >
      >;
      return <Collection key={index} {...collectionItem[1]} />;
    });
  };

  return <>{propagateCollections()}</>;
};

export default CollectionManager;
