import React from "react";
import { NextPageWithLayout } from "./_app";
import NavigationLayout from "../layouts/NavigationLayout";
import GradientAnimation from "../components/GradientAnimation";
import cx from "classnames";

const Home: NextPageWithLayout = () => {
  return (
    <div>
      <div className={cx("-mt-28 z-10 absolute")}>
        <div
          className={cx(
            "drop-shadow-xl text-6xl font-black",
            "text-black",
            "dark:text-white"
          )}
        >
          Welcome
        </div>
      </div>
      <div className={cx("")}></div>
    </div>
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

export default Home;
