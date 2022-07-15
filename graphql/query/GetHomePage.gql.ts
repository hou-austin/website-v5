import { gql } from "@apollo/client";

export const GET_HOME_PAGE = gql`
  query GetHomePage {
    homePage {
      data {
        attributes {
          __typename
          hero_sections {
            __typename
            data {
              attributes {
                __typename
                hero {
                  __typename
                  title
                  description
                }
                slices {
                  ... on ComponentSlicesLookingGlass {
                    __typename
                    title
                    description
                    buttons {
                      __typename
                      size
                      label
                      color
                      link {
                        href
                        label
                        target
                      }
                    }
                    floatingLinks {
                      __typename
                      href
                      label
                      target
                      color
                    }
                  }
                  ... on ComponentSlicesMultiImageDisplay {
                    __typename
                    images {
                      __typename
                      width
                      height
                      alt
                      priority
                      allowExpand
                      image {
                        __typename
                        data {
                          attributes {
                            url
                          }
                        }
                      }
                    }
                  }
                  ... on ComponentSlicesLookingGlassWithPicture {
                    __typename
                    image {
                      __typename
                      width
                      height
                      alt
                      priority
                      allowExpand
                      image {
                        __typename
                        data {
                          attributes {
                            url
                          }
                        }
                      }
                    }
                    imagePosition
                    lookingGlass {
                      __typename
                      title
                      description
                      buttons {
                        __typename
                        size
                        label
                        color
                        link {
                          href
                          label
                          target
                        }
                      }
                      floatingLinks {
                        __typename
                        href
                        label
                        target
                        color
                      }
                    }
                  }
                  ... on ComponentSharedButton {
                    __typename
                    label
                    position
                    color
                    icon
                    size
                    link {
                      __typename
                      label
                      color
                      href
                      target
                    }
                  }
                }
                holoImage {
                  __typename
                  width
                  height
                  alt
                  priority
                  image {
                    __typename
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                }
              }
            }
          }
          test {
            __typename
            ... on ComponentSlicesHero {
              __typename
              title
            }
          }
        }
      }
    }
  }
`;
