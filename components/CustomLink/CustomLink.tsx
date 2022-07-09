import React from "react";
import Link from "next/link";
import { getAccentColor, GetAccentColorProps } from "../../utils/styles/color";
import cx from "classnames";

type Props = {
  children?: React.ReactNode;
  href: string;
  classNames?: string;
  target?: string;
  colorStyle?: GetAccentColorProps;
};

const CustomLink: React.FC<Props> = ({
  children,
  href,
  classNames = "",
  target,
  colorStyle = { color: "autoS400O10", types: ["text"] },
}) => {
  const colorClasses = getAccentColor(colorStyle);

  return (
    <Link href={href}>
      <a className={cx(classNames, colorClasses)} {...(target && { target })}>
        {children}
      </a>
    </Link>
  );
};

export default CustomLink;
