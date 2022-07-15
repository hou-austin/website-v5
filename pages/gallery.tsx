import React from "react";
import { NextPageWithLayout } from "./_app";
import Page, { StrapiSingles } from "../components/Page/Page";
import NavigationLayout from "../layouts/NavigationLayout";
import client from "../utils/apollo";
import { GetGalleryPageDocument } from "../types/generated/schema";
import Head from "next/head";

type Props = NextPageWithLayout & {
  page: { data: StrapiSingles };
};

const Gallery = ({ page }: Props) => {
  return (
    <>
      <Head>
        <title>Gallery</title>
        <meta
          name="description"
          content="Full stack software engineer, UI/UX designer, artist, and full time hobbyist."
        />
      </Head>
      <div className={"mt-32"}>
        <Page staticStrapiData={page} />
      </div>
    </>
  );
};

Gallery.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <div>
      <NavigationLayout>{page}</NavigationLayout>
    </div>
  );
};

export async function getStaticProps() {
  const { data } = await client.query({ query: GetGalleryPageDocument });

  return {
    props: { page: data.galleryPage as StrapiSingles },
  };
}

export default Gallery;
