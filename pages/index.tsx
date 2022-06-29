import React from "react";
import { NextPageWithLayout } from "./_app";
import NavigationLayout from "../layouts/NavigationLayout";
import GradientAnimation from "../components/GradientAnimation";
import cx from "classnames";
import Image from "next/future/image";
import { HiChevronRight } from "react-icons/hi";

import DetailedImageShowcase from "../components/DetailedImageShowcase";
import LookingGlassDescriptionContent from "../components/LookingGlassContainer/LookingGlassDescriptionContent";
import PrimarySection from "../components/PrimarySection";
import LookingGlassContainer from "../components/LookingGlassContainer";
import { getColoredGlassStyles } from "../utils/glass";

const fullStackDeveloperSection = (
  <PrimarySection
    title="Full-Stack Developer"
    subtitle="I build scalable and maintainable applications, unapologetically
                modern, yet never abandoning the fundamentals."
    backgroundImage={"/images/light_streak_3_30_180.png"}
  >
    <DetailedImageShowcase
      imageURL={"/images/spacewaves.png"}
      lookingGlassContainerProps={{
        bottomTabs: [
          {
            label: "View on Github",
            color: "purple",
            href: "https://github.com/PhoenixFieryn/react-ecommerce",
          },
          {
            label: "View Demo",
            color: "sky",
            href: "https://google.com",
          },
        ],
      }}
    >
      <LookingGlassDescriptionContent
        title="React eCommerce Shop"
        pillNodes={[
          { color: "sky", label: "React" },
          { color: "sky", label: "SCSS" },
          { color: "red", label: "Node" },
          { color: "red", label: "ExpressJS" },
          { color: "purple", label: "MongoDB" },
          { color: "green", label: "Javascript" },
          { label: "HTML" },
        ]}
      >
        <p>
          Customers can add items to their card, mutate the number of items, and
          checkout using Stripe. Customers can add items to their card, mutate
          the number of items, and checkout using Stripe.
        </p>
      </LookingGlassDescriptionContent>
    </DetailedImageShowcase>
    <DetailedImageShowcase
      imageURL={"https://picsum.photos/300/200?random"}
      lookingGlassContainerProps={{
        bottomTabs: [
          {
            label: "View on Github",
            color: "purple",
            href: "https://github.com/PhoenixFieryn/react-ecommerce",
          },
          {
            label: "View Demo",
            color: "sky",
            href: "https://google.com",
          },
        ],
      }}
    >
      <LookingGlassDescriptionContent
        title="React eCommerce Shop"
        pillNodes={[
          { color: "sky", label: "React" },
          { color: "sky", label: "SCSS" },
          { color: "red", label: "Node" },
          { color: "red", label: "ExpressJS" },
          { color: "purple", label: "MongoDB" },
          { color: "green", label: "Javascript" },
          { label: "HTML" },
        ]}
      >
        <p>
          Customers can add items to their card, mutate the number of items, and
          checkout using Stripe. Customers can add items to their card, mutate
          the number of items, and checkout using Stripe.
        </p>
      </LookingGlassDescriptionContent>
    </DetailedImageShowcase>
  </PrimarySection>
);

const designerSection = (
  <PrimarySection
    title="UI/UX Designer and Engineer, Artist"
    subtitle="Beyond designing the UI/UX, I tackle the user experience with an engineering perspective - building solutions that are not only appealing, but solves practical issues."
    backgroundImage={"/images/light_streak_4_30.png"}
  >
    <div className={"grid grid-cols-3 w-full py-8"}>
      <Image
        src={"/images/spacewaves.png"}
        className={"drop-shadow-xl rotate3d-right rounded-lg"}
      />
      <Image
        src={"/images/spacewaves.png"}
        className={"drop-shadow-2xl z-10 rounded-lg"}
      />
      <Image
        src={"/images/spacewaves.png"}
        className={"drop-shadow-xl rotate3d-left rounded-lg"}
      />
    </div>
    <div
      className={cx(
        getColoredGlassStyles({ color: "white" }),
        "px-6 py-2 rounded-full border-2 w-fit mx-auto flex flex-row gap-2 items-center cursor-pointer"
      )}
    >
      Gallery <HiChevronRight />
    </div>
    <LookingGlassContainer>Text</LookingGlassContainer>
  </PrimarySection>
);

const Home: NextPageWithLayout = () => {
  return (
    <div>
      <div className={cx("max-w-7xl mx-auto px-4")}>
        <div className={cx("top-52 z-10 absolute")}>
          <div
            className={cx(
              "text-bold",
              "drop-shadow-lg-white text-6xl font-black",
              "dark:drop-shadow-lg dark:text-white"
            )}
          >
            Hi, I&apos;m a...
          </div>
        </div>
      </div>
      <div className={cx("mb-8 flex flex-col gap-32")}>
        {fullStackDeveloperSection}
        {designerSection}
      </div>
    </div>
  );
};

// const moreDetails = `<div className={cx("w-full absolute -bottom-8 px-4 -z-10")}>
//                 <div
//                   className={cx(
//                     "mx-auto max-w-xs px-4 pt-1 pb-1 rounded-lg flex justify-center shadow-lg",
//                     "bg-blue-600"
//                   )}
//                 >
//                   <span
//                     className={cx(
//                       "text-xs font-semibold uppercase",
//                       "text-white"
//                     )}
//                   >
//                     More Details
//                   </span>
//                 </div>
//               </div>`;

Home.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <div>
      <GradientAnimation />
      <NavigationLayout>{page}</NavigationLayout>
    </div>
  );
};

export default Home;
