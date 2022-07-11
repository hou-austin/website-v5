import React from "react";
import CollectionManager from "../CollectionManger";
import SliceManager from "../SliceManager";

type Props = {
  staticStrapiData: StrapiSingles;
};

const Page: React.FC<Props> = ({ staticStrapiData }) => {
  const {
    data: { attributes },
  } = staticStrapiData;

  const propagatePageContent = () => {
    const { __typename, ...pageContent } = attributes;
    if (!pageContent) return;

    return Object.entries(pageContent).map((pageContentItem, index) => {
      const pageItemContent = pageContentItem[1];
      if (Array.isArray(pageItemContent)) {
        return <SliceManager slices={pageItemContent} key={index} />;
      } else {
        return <CollectionManager collection={pageItemContent} key={index} />;
      }
    });
  };

  return <>{propagatePageContent()}</>;
};

export default Page;
