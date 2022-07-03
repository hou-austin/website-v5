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
    title="UI/UX Designer and Artist"
    subtitle="Beyond designing the UI/UX, I tackle the user experience with an engineering perspective - building solutions that are not only appealing, but solves practical issues."
    backgroundImage={"/images/light_streak_4_30.png"}
  >
    <div></div>
    <div className={"grid grid-cols-3 w-full"}>
      <div className="py-4 rotate3d-right">
        <Image
          src={"https://picsum.photos/300/200?random"}
          className={"drop-shadow-xl rounded-lg w-full"}
          alt="gallery showcase image"
        />
      </div>

      <div className="py-4 z-10">
        <Image
          src={"https://picsum.photos/300/200?random"}
          className={"drop-shadow-2xl rounded-lg w-full"}
          alt="gallery showcase image"
        />
      </div>

      <div className="py-4 rotate3d-left">
        <Image
          src={"https://picsum.photos/300/200?random"}
          className={"drop-shadow-xl rounded-lg w-full"}
          alt="gallery showcase image"
        />
      </div>
    </div>
    <div
      className={cx(
        getColoredGlassStyles(),
        "px-6 py-2 rounded-full border-2 w-fit my-4 mx-auto flex flex-row gap-2 items-center cursor-pointer"
      )}
    >
      Gallery <HiChevronRight />
    </div>
    <LookingGlassContainer>
      <LookingGlassDescriptionContent
        title="Tools and Equipment Used"
        pillNodes={[
          { label: "Photoshop", color: "sky" },
          { label: "Illustrator", color: "sky" },
          { label: "After Effects", color: "red" },
          { label: "Red Giant TRAPCODE", color: "red" },
          { label: "Cinema4D", color: "green" },
          { label: "Octane Render", color: "green" },
          { label: "Pixel Sort" },
          { label: "Wacom Intuos Pro" },
          { label: "Sony α6300" },
        ]}
      ></LookingGlassDescriptionContent>
    </LookingGlassContainer>
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

Home.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <div>
      <GradientAnimation />
      <NavigationLayout>{page}</NavigationLayout>
    </div>
  );
};

export default Home;
