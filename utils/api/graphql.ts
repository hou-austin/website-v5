export type StaticStrapiData = {
  data: {
    attributes: StaticStrapiData;
  };
  [key: string]: unknown;
};

export type CollapsedStaticStrapiData = Omit<StaticStrapiData, "data">;

export const collapseDataAttributes = (
  inputData: StaticStrapiData
): CollapsedStaticStrapiData => {
  const { data } = inputData;

  if (data) {
    if (Array.isArray(data)) {
      return collapseStrapiSlices(data);
    } else {
      return collapseDataAttributes(data);
    }
  }
  if (attributes) {
    return collapseDataAttributes(attributes);
  }

  return inputData;
};

const collapseStrapiSlices = (strapiSlices: StaticStrapiData[]) => {
  return strapiSlices.map((item) => collapseDataAttributes(item));
};
