import React from "react";
import HeroSection from "../collections/HeroSection";
import { HeroSection as HeroSectionSchema } from "../../types/generated/schema";

type StrapiCollectionsDataIntersection = HeroSectionSchema & {
  __typename: string;
};

type StrapiCollections = { data: StrapiCollectionsData[] };
type StrapiCollectionsData = { attributes: StrapiCollectionsDataIntersection };

const COLLECTIONS: {
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  [key in string]: React.FC<any>;
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

      if (!Collection) {
        return null;
      } else {
        return <Collection key={index} {...collectionItem[1]} />;
      }
    });
  };

  return <>{propagateCollections()}</>;
};

export default CollectionManager;
