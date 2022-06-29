import React from "react";
import Image from "next/future/image";
import cx from "classnames";

type Props = {
  title?: string;
  subtitle?: string;
  backgroundImage: string;
  children?: React.ReactNode;
};

const PrimarySection: React.FC<Props> = (props) => {
  const { title, subtitle, backgroundImage, children } = props;

  return (
    <div className={cx("mt-14")}>
      <div className={cx("max-w-7xl mx-auto px-4")}>
        <div className={cx("font-bold text-5xl")}>{title}</div>
        <div className={cx("mt-5 text-lg")}>{subtitle}</div>
      </div>
      <div className="mt-10 relative py-8 border-t border-slate-50/20">
        <Image src={backgroundImage} className={cx("absolute w-full top-0")} />
        <div
          className={cx("max-w-7xl px-4 mx-auto relative flex flex-col gap-8")}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default PrimarySection;
