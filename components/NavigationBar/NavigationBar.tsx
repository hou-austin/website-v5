import React from "react";
import Link from "next/link";
import cx from "classnames";
import { getAccentColor } from "../../utils/styles/color";

const NavigationBar: React.FC = () => {
  const [scrollPosition, setScrollPosition] = React.useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={cx(
        "w-full top-0 border-b duration-500 backdrop-blur-md z-50",
        { fixed: true },
        { sticky: false },
        getAccentColor({ color: "autoS400O10", types: ["border"] }),
        { "glass-nav-white-bg-1": scrollPosition === 0 },
        { "glass-nav-dark-bg-1": scrollPosition === 0 },
        { "glass-nav-white-bg-2": scrollPosition > 0 },
        { "glass-nav-dark-bg-2": scrollPosition > 0 }
      )}
    >
      <nav
        className={cx(
          "flex flex-row items-center justify-between max-w-7xl mx-auto py-3 px-4 border-slate-900 overflow-hidden"
        )}
      >
        <ul>
          <li>
            <Link href="/">
              <a className="text-xl font-bold">Austin Hou</a>
            </Link>
          </li>
        </ul>
        <ul className="flex flex-row gap-8">
          <li>
            <Link href="/gallery" passHref={true}>
              <a>Gallery</a>
            </Link>
          </li>
          <li>
            <Link href="https://www.github.com/PhoenixFieryn" passHref={true}>
              <a target="_blank">Github</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationBar;
