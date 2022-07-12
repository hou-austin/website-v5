import React from "react";
import Image from "next/future/image";
import cx from "classnames";
import LookingGlassContainer from "../LookingGlassContainer";
import FooterImage from "../../public/images/light_streak_180_fade_crop.png";
import { getAccentColor } from "../../utils/styles/color";

const Footer: React.FC = () => {
  return (
    <footer className={cx("relative w-full mt-12", "sm:mt-40")}>
      <Image
        src={FooterImage}
        alt=""
        width={1920}
        height={1080}
        className="absolute -bottom-4 max-w-7xl left-0 right-0 mx-auto"
      />

      <div className={cx("max-w-7xl mx-auto px-4 mb-4")}>
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
