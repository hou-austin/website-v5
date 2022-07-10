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

    const pageContentElements = [];

    for (const pageItem of Object.entries(pageContent)) {
      const pageItemContent = pageItem[1];
      if (Array.isArray(pageItemContent)) {
        pageContentElements.push(<SliceManager slices={pageItemContent} />);
      } else {
        pageContentElements.push(
          <CollectionManager collection={pageItemContent} />
        );
      }
    }

    return pageContentElements;
  };

  return <>{propagatePageContent()}</>;
};

export default Page;
