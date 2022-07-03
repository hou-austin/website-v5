import React from "react";
import Image from "next/future/image";
import cx from "classnames";
import LookingGlassContainer from "../LookingGlassContainer";
import FooterImage from "../../public/images/light_streak_180_crop.png";
import LookingGlassDescriptionContent from "../LookingGlassContainer/LookingGlassDescriptionContent";
import { getMonoGlassStyles } from "../../utils/glass";

const Footer: React.FC = () => {
  return (
    <footer className={cx("relative w-full mt-96 pb-4")}>
      <Image
        src={FooterImage}
        className={cx("absolute bottom-0 -z-10")}
        alt=""
      />
      <div className={cx("max-w-7xl mx-auto px-4")}>
        <LookingGlassContainer>
          <LookingGlassDescriptionContent
            pillNodes={[
              { label: "React/Next.JS", color: "sky" },
              { label: "TailwindCSS", color: "sky" },
              { label: "Photoshop", color: "sky" },
              { label: "Node", color: "red" },
              { label: "TypeScript", color: "green" },
              { label: "Javascript", color: "green" },
              { label: "HTML" },
              { label: "CSS" },
              { label: "Made with ❤️ by Austin Hou - 2022" },
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
