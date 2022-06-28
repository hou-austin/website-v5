import React from "react";
import { NextPageWithLayout } from "./_app";
import NavigationLayout from "../layouts/NavigationLayout";
import GradientAnimation from "../components/GradientAnimation";
import LookingGlassContainer from "../components/LookingGlassContainer";
import cx from "classnames";

const Home: NextPageWithLayout = () => {
  return (
      <div>

        <GradientAnimation/>
        <div className={cx("max-w-7xl mx-auto")}>

          <div className={cx("-mt-20 z-10")}></div>
          <LookingGlassContainer>Welcome</LookingGlassContainer>
        </div>
      </div>
  );
};

Home.getLayout = function getLayout (page: React.ReactElement) {
  return <NavigationLayout>{page}</NavigationLayout>;
};

export default Home;
