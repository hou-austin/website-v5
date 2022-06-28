import React from "react";
import { NextPageWithLayout } from "./_app";
import NavigationLayout from "../layouts/NavigationLayout";
import GradientAnimation from "../components/GradientAnimation";
import cx from "classnames";
import LookingGlassContainer from "../components/LookingGlassContainer";

import sectionBg from "../public/images/light_streak_2.png";
import DetailedImageShowcase from "../components/DetailedImageShowcase";

const Home: NextPageWithLayout = () => {
  return (
    <div>
      <div className={cx("max-w-7xl mx-auto px-4")}>
        <div className={cx("top-52 z-10 absolute")}>
          <div
            className={cx(
              "drop-shadow-xl text-6xl font-black",
              "text-bold",
              "dark:text-white"
            )}
          >
            Hi, I'm a...
          </div>
        </div>
      </div>
      <div className={cx("mt-14")}>
        <div className={cx("max-w-7xl mx-auto px-4")}>
          <div className={cx("font-bold text-5xl")}>Full-Stack Developer</div>
          <div className={cx("mt-5")}>
            <div className={cx("text-lg")}>
              <span>
                I build scalable and maintainable applications, unapologetically
                modern, yet never abandoning the fundamentals.
              </span>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div className="relative py-8 border-t border-slate-50/20">
            <div className={cx("absolute w-full top-0")}>
              <picture>
                <source srcSet={`./images/light_streak_3_30_180.png`} />
                <img src={`./images/light_streak_3_30_180.png`} />
              </picture>
            </div>
            <div className={cx("max-w-7xl px-4 mx-auto relative")}>
              <DetailedImageShowcase imageURL={"/images/spacewaves.png"}>
                <div>
                  <div className="pb-2">
                    <div className={cx("font-semibold text-xl pb-2")}>
                      React eCommerce Shop
                    </div>
                    <div className={cx("text-sm ", "dark:text-zinc-300")}>
                      <ul className={cx("list-disc pl-6 flex gap-1 flex-col")}>
                        <li>
                          Built with React, GraphQL, ExpressJs, and MongoDB.
                        </li>
                        <li>
                          Customers can add items to their card, mutate the
                          number of items, and checkout using Stripe.
                        </li>
                        <li>
                          Shop owners can add items and change product
                          information, images, and availability.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className={cx("border-t pt-2", "dark:border-slate-700/30")}
                  >
                    <div
                      className={cx(
                        "rounded-full py-1 px-3 text-xs bg-sky-400/10 border border-sky-400/10 w-fit text-sky-400 font-semibold"
                      )}
                    >
                      React
                    </div>
                  </div>
                </div>
              </DetailedImageShowcase>
              <DetailedImageShowcase imageURL={"/images/spacewaves.png"}>
                <div>
                  <div className="pb-2">
                    <div className={cx("font-semibold text-xl pb-2")}>
                      React eCommerce Shop
                    </div>
                    <div className={cx("text-sm ", "dark:text-zinc-300")}>
                      <ul className={cx("list-disc pl-6 flex gap-1 flex-col")}>
                        <li>
                          Built with React, GraphQL, ExpressJs, and MongoDB.
                        </li>
                        <li>
                          Customers can add items to their card, mutate the
                          number of items, and checkout using Stripe.
                        </li>
                        <li>
                          Shop owners can add items and change product
                          information, images, and availability.
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className={cx("border-t pt-2", "dark:border-slate-700/30")}
                  >
                    <div
                      className={cx(
                        "rounded-full py-1 px-3 text-xs bg-sky-400/10 border border-sky-400/10 w-fit text-sky-400 font-semibold"
                      )}
                    >
                      React
                    </div>
                  </div>
                </div>
              </DetailedImageShowcase>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const moreDetails = `<div className={cx("w-full absolute -bottom-8 px-4 -z-10")}>
                <div
                  className={cx(
                    "mx-auto max-w-xs px-4 pt-1 pb-1 rounded-lg flex justify-center shadow-lg",
                    "bg-blue-600"
                  )}
                >
                  <span
                    className={cx(
                      "text-xs font-semibold uppercase",
                      "text-white"
                    )}
                  >
                    More Details
                  </span>
                </div>
              </div>`;

Home.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <div>
      <GradientAnimation />

      <NavigationLayout>{page}</NavigationLayout>
    </div>
  );
};

export default Home;
