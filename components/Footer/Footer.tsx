import React from "react";
import Image from "next/future/image";
import cx from "classnames";
import LookingGlassContainer from "../LookingGlassContainer";
import FooterImage from "../../public/images/light_streak_180_fade_crop.png";
import LookingGlassDescriptionContent from "../LookingGlassContainer/LookingGlassDescriptionContent";
import { getMonoGlassStyles } from "../../utils/glass";

const Footer: React.FC = () => {
  return (
    <footer className={cx("relative w-full mt-12", "sm:mt-40")}>
      <Image
        src={FooterImage}
        alt=""
        width={1920}
        height={1080}
        className="absolute -bottom-4 -z-10 max-w-7xl left-0 right-0 mx-auto"
      />

      <div className={cx("max-w-7xl mx-auto px-4 mb-4")}>
        <LookingGlassContainer>
          <LookingGlassDescriptionContent
            pillNodes={[
              { children: "React/Next.JS", color: "sky" },
              { children: "TailwindCSS", color: "sky" },
              { children: "Photoshop", color: "sky" },
              { children: "Node", color: "red" },
              { children: "TypeScript", color: "green" },
              { children: "Javascript", color: "green" },
              { children: "HTML" },
              { children: "CSS" },
              { children: "Made with ❤️ by Austin Hou - 2022" },
            ]}
          >
            <div className="grid grid-cols-footer">
              <div
                className={cx(
                  "border-r pr-12",
                  getMonoGlassStyles({ types: ["border"] })
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
          </LookingGlassDescriptionContent>
        </LookingGlassContainer>
      </div>
    </footer>
  );
};

export default Footer;
