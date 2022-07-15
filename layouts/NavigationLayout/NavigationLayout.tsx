import React from "react";

import NavigationBar from "../../components/NavigationBar";
import cx from "classnames";
import Footer from "../../components/Footer";

type Props = {
  children?: React.ReactNode;
};

const NavigationLayout: React.FC<Props> = ({ children }) => {
  return (
    <div
      className={cx(
        "overflow-hidden min-h-screen flex flex-col text-black",
        "dark:text-white"
      )}
    >
      <NavigationBar />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
};

export default NavigationLayout;
