import React from "react";
import Image from "next/image";
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
        <div className={cx("font-bold text-5xl break-words")}>{title}</div>
        <div className={cx("mt-5 text-lg break-words")}>{subtitle}</div>
      </div>
      <div className="mt-10 relative py-8 border-t border-slate-50/20">
        <Image
          src={backgroundImage}
          alt=""
          width={2560}
          height={1440}
          layout="fill"
        />
        <div
          className={cx(
            "max-w-7xl px-4 mx-auto relative flex flex-col sm:gap-8 gap-4"
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default PrimarySection;
