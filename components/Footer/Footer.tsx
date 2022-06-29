import React from "react";
import Image from "next/future/image";
import cx from "classnames";
import LookingGlassContainer from "../LookingGlassContainer";

const Footer: React.FC = () => {
  return (
    <footer className={cx("relative w-full mt-96 pb-4")}>
      <Image
        src={`/images/light_streak_180_crop.png`}
        className={cx("absolute bottom-0 -z-10")}
        alt=""
      />
      <div className={cx("max-w-7xl mx-auto px-4")}>
        <LookingGlassContainer>
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
        </LookingGlassContainer>
      </div>
    </footer>
  );
};

export default Footer;
