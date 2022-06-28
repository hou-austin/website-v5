import React from "react";

import NavigationBar from "../../components/NavigationBar";
import cx from "classnames";

type Props = {
  children?: React.ReactNode;
};

const NavigationLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <NavigationBar />
      <div>
        <div className={cx("max-w-7xl mx-auto px-4")}>{children}</div>
        <div className={cx("relative")}>
          <picture className={cx("absolute top-0 flex")}>
            <source srcSet={`./images/light_streak_180.png`} />
            <img src={`./images/light_streak_180.png`} />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default NavigationLayout;
