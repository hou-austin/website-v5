import React from "react";
import CollectionManager from "../CollectionManger";
import SliceManager from "../SliceManager";
import { HomePageEntity } from "../../types/generated/schema";

export type StrapiSingles = HomePageEntity;

type Props = {
  staticStrapiData: { data: StrapiSingles };
};

const Page: React.FC<Props> = ({ staticStrapiData }) => {
  const { data: strapiData } = staticStrapiData;

  const propagatePageContent = () => {
    if (!strapiData) return;
    const singleAttributes = strapiData?.attributes;
    if (!singleAttributes) return;

    return Object.entries(singleAttributes).map((pageContentItem, index) => {
      const pageItemContent = pageContentItem[1];
      if (!pageItemContent?.data) {
        return;
      }

      console.log(pageItemContent);

      if (Array.isArray(pageItemContent)) {
        return <SliceManager slices={pageItemContent} key={index} />;
      } else if (!!pageItemContent) {
        return <CollectionManager collection={pageItemContent} key={index} />;
      } else {
        return null;
      }
    });
  };

  return <>{propagatePageContent()}</>;
};

export default Page;
