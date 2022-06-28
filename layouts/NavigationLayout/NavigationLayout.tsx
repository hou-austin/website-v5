import React from "react";

import NavigationBar from "../../components/NavigationBar";
import cx from "classnames";
import Footer from "../../components/Footer";

type Props = {
  children?: React.ReactNode;
};

const NavigationLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className={cx("text-black", "dark:text-white")}>
      <NavigationBar />
      <div>
        <div className={cx("max-w-7xl mx-auto px-4")}>{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default NavigationLayout;
