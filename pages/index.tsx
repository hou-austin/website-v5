import React from "react";
import { NextPageWithLayout } from "./_app";
import NavigationLayout from "../layouts/NavigationLayout";
import GradientAnimation from "../components/GradientAnimation";
import Head from "next/head";
import { GetHomePageDocument } from "../types/generated/schema";
import client from "../utils/apollo";
import Page from "../components/Page";
import cx from "classnames";
import { StrapiSingles } from "../components/Page/Page";

type Props = NextPageWithLayout & {
  page: { data: StrapiSingles };
};

const Home = ({ page }: Props) => {
  return (
    <>
      <div className={cx("max-w-7xl mx-auto px-4")}>
        <div className={cx("top-52 z-10 absolute")}>
          <div
            className={cx(
              "text-bold",
              "drop-shadow-lg-white text-6xl font-black",
              "dark:drop-shadow-lg dark:text-white"
            )}
          >
            Hi, I&apos;m a...
          </div>
        </div>
      </div>
      <div className={"mt-8"}>
        <Page staticStrapiData={page} />
      </div>
    </>
  );
};

Home.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <div>
      <GradientAnimation />
      <NavigationLayout>{page}</NavigationLayout>
    </div>
  );
};

export async function getStaticProps() {
  const { data } = await client.query({ query: GetHomePageDocument });

  return {
    props: { page: data.homePage as StrapiSingles },
  };
}

export default Home;
