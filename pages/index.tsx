import React from "react";
import { NextPageWithLayout } from "./_app";
import NavigationLayout from "../layouts/NavigationLayout";
import GradientAnimation from "../components/GradientAnimation";
import cx from "classnames";

const Home: NextPageWithLayout = () => {
  return (
    <div>
      <div className={cx("top-52 z-10 absolute")}>
        <div
          className={cx(
            "drop-shadow-xl text-6xl font-black",
            "text-bold",
            "dark:text-white"
          )}
        >
          Hi, I'm a...
        </div>
      </div>
      <div className={cx("mt-16")}>
        <div className={cx("font-bold text-5xl")}>Full-Stack Developer</div>
        <div className={cx("mt-4")}>
          <div className={cx("text-lg text-center")}>
            <span></span>
          </div>
          <div></div>
        </div>
      </div>
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
