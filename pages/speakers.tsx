import React from "react";
import { NextPageWithLayout } from "./_app";
import Page, { StrapiSingles } from "../components/Page/Page";
import NavigationLayout from "../layouts/NavigationLayout";
import client from "../utils/apollo";
import { GetSpeakersPageDocument } from "../types/generated/schema";
import Head from "next/head";

type Props = NextPageWithLayout & {
  page: { data: StrapiSingles };
};

const Speakers = ({ page }: Props) => {
  return (
    <>
      <Head>
        <title>Speakers</title>
        <meta name="description" content="My speaker projects." />
      </Head>
      <div className={"mt-32"}>
        <Page staticStrapiData={page} />
      </div>
    </>
  );
};

Speakers.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <div>
      <NavigationLayout>{page}</NavigationLayout>
    </div>
  );
};

export async function getStaticProps() {
  const { data } = await client.query({ query: GetSpeakersPageDocument });

  return {
    props: { page: data.speakersPage as StrapiSingles },
  };
}

export default Speakers;
