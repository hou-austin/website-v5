import React from "react";
import cx from "classnames";
import LookingGlassContainer from "../LookingGlassContainer";
import { getAccentColor } from "../../utils/styles/color";

const footerImage = "light_streak_180_fade_crop";

const Footer: React.FC = () => {
  return (
    <footer className={cx("clear-both relative w-full pt-12", "sm:mt-40")}>
      <div className="absolute -bottom-8 max-w-7xl left-0 right-0 mx-auto">
        <picture>
          <source
            srcSet={`https://cdn.austinhou.com/image/1280/png/${footerImage}.webp`}
            type="image/webp"
          />
          <source
            srcSet={`https://cdn.austinhou.com/image/1280/png/${footerImage}.avif`}
            type="image/avif"
          />
          <img
            src={`https://cdn.austinhou.com/image/1280/source/${footerImage}.png`}
            alt=""
            width={1280}
            height={720}
          />
        </picture>
      </div>

      <div className={cx("b-0 w-full max-w-7xl mx-auto px-4 mb-4")}>
        <LookingGlassContainer>
          <div className="grid grid-cols-footer">
            <div
              className={cx(
                "border-r pr-12",
                getAccentColor({
                  color: "autoS400O10",
                  types: ["border"],
                })
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
        </LookingGlassContainer>
      </div>
    </footer>
  );
};

export default Footer;
