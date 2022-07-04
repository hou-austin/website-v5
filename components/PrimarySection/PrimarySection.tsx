import React from "react";
import Image from "next/future/image";
import cx from "classnames";

type Props = {
  title?: string;
  subtitle?: string;
  backgroundImage: string;
  children?: React.ReactNode;
  priority?: boolean;
};

const PrimarySection: React.FC<Props> = (props) => {
  const {
    title,
    subtitle,
    backgroundImage,
    children,
    priority = false,
  } = props;

  return (
    <div className={cx("mt-14")}>
      <div className={cx("max-w-7xl mx-auto px-4")}>
        <div className={cx("font-bold text-5xl break-words")}>{title}</div>
        <div className={cx("mt-5 text-lg break-words")}>{subtitle}</div>
      </div>
      <div className="mt-10 py-8 border-t border-slate-50/20 relative">
        <Image
          src={backgroundImage}
          alt=""
          width={1920}
          height={1080}
          {...(priority && { priority: true })}
          className={
            "absolute top-0 max-w-7xl left-0 right-0 mx-auto overflow-hidden -z-10"
          }
        />
        <div
          className={cx(
            "top-0 max-w-7xl px-4 mx-auto flex flex-col sm:gap-8 gap-4 z-10"
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default PrimarySection;
