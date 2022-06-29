import React from "react";
import Link from "next/link";
import cx from "classnames";
import { getMonoGlassStyles } from "../../utils/glass";

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
        getMonoGlassStyles({ types: ["border"] }),
        { "bg-white/20": scrollPosition === 0 },
        { "dark:bg-black/20": scrollPosition === 0 },
        { "bg-white/60": scrollPosition > 0 },
        { "dark:bg-black/60": scrollPosition > 0 }
      )}
    >
      <nav
        className={cx(
          "flex items-center justify-between max-w-7xl mx-auto py-3 px-4 border-slate-900"
        )}
      >
        <ul>
          <li>
            <Link href="/">
              <a className="text-xl font-bold">Austin Hou</a>
            </Link>
          </li>
        </ul>
        <ul>
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
