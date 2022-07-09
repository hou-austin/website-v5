import React from "react";
import Link from "next/link";

type Props = {
  children?: React.ReactNode;
  href: string;
  classNames?: string;
};

const CustomLink: React.FC<Props> = ({ children, href, classNames = "" }) => {
  return (
    <Link href={href}>
      <a className={classNames}>{children}</a>
    </Link>
  );
};

export default CustomLink;
