import React from "react";
import cx from "classnames";

const Footer: React.FC = () => {
  return (
    <footer className={cx("relative h-96")}>
      <div className={cx("absolute bottom-0")}>
        <picture>
          <source srcSet={`./images/light_streak_180_crop.png`} />
          <img src={`./images/light_streak_180_crop.png`} />
        </picture>
      </div>

      <div
        className={cx(
          "absolute left-0 right-0 bottom-10 mx-auto max-w-7xl mx-auto"
        )}
      >
        <div
          className={cx(
            "mx-4 px-4 w-full p-4 border backdrop-blur-md rounded-lg flex flex-col",
            "dark:bg-black/60 dark:border-slate-700/30"
          )}
        >
          <div className="grid grid-cols-footer">
            <div
              className={cx(
                "mb-2.5 border-r pr-12",
                "dark:border-slate-700/30"
              )}
            >
              <div className={cx("font-medium")}>Contact Me</div>
              <ul className={cx("text-sm font-light mt-2.5")}>
                <li>
                  <a
                    href="mailto:austin@austinhou.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    austin@austinhou.com
                  </a>
                </li>
              </ul>
            </div>
            <div></div>
          </div>
          <div
            className={cx(
              "text-xs border-t pt-2.5",
              "dark:border-slate-700/30"
            )}
          >
            Made with ❤️ by Austin Hou, 2022
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
