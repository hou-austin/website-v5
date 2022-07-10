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
    const collectionElements = [];
    let i = 0;
    for (const collectionItem of Object.entries(data)) {
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
      collectionElements.push(<Collection {...collectionItem[1]} key={i} />);
      i++;
    }

    return collectionElements;
  };

  return <>{propagateCollections()}</>;
};

export default CollectionManager;
