import React from "react";
import { NextPageWithLayout } from "./_app";
import NavigationLayout from "../layouts/NavigationLayout";
import GradientAnimation from "../components/GradientAnimation";
import cx from "classnames";

import DetailedImageShowcase from "../components/DetailedImageShowcase";
import LookingGlassDescriptionContent from "../components/LookingGlassContainer/LookingGlassDescriptionContent";
import PrimarySection from "../components/PrimarySection";

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
  </PrimarySection>
);

const designerSection = (
  <PrimarySection
    title="UI/UX Designer and Engineer, Artist"
    subtitle="Beyond designing the UI/UX, I tackle the user experience with an engineering perspective - building a solution that's not only appealing, but solves an issue."
    backgroundImage={"/images/light_streak_4_30.png"}
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
      <div className={cx("mt-14 flex flex-col gap-32")}>
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
