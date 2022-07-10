import React from "react";
import { NextPageWithLayout } from "./_app";
import NavigationLayout from "../layouts/NavigationLayout";
import GradientAnimation from "../components/GradientAnimation";
import Image from "next/future/image";

import DetailedImageShowcase from "../components/DetailedImageShowcase";
import LookingGlassDescriptionContent from "../components/LookingGlassContainer/LookingGlassDescriptionContent";
import PrimarySection from "../components/PrimarySection";
import LookingGlassContainer from "../components/LookingGlassContainer";
import Head from "next/head";
import { GetHomePageDocument } from "../graphql/generated/schema";
import client from "../utils/apollo";
import Page from "../components/Page";
import cx from "classnames";

const fullStackDeveloperSection = (
  <PrimarySection
    title="Full-Stack Developer"
    subtitle="I build scalable and maintainable applications, unapologetically
                modern, yet never abandoning the fundamentals."
    backgroundImage={"/images/light_streak_5_small.png"}
    priority
  >
    <DetailedImageShowcase
      imageURL={"/images/spacewaves.jpg"}
      lookingGlassContainerProps={{
        bottomTabs: [
          {
            label: "View on Github",
            color: "purpleS400O10",
            href: "https://github.com/PhoenixFieryn/react-ecommerce",
          },
          {
            label: "View Demo",
            color: "skyS400O10",
            href: "https://google.com",
          },
        ],
      }}
    >
      <LookingGlassDescriptionContent
        title="React eCommerce Shop"
        // pillNodes={[
        //   { color: "skyTransparentLg", children: "React" },
        //   { color: "skyTransparentLg", children: "SCSS" },
        //   { color: "redTransparentLg", children: "Node" },
        //   { color: "redTransparentLg", children: "ExpressJS" },
        //   { color: "purpleTransparentLg", children: "MongoDB" },
        //   { color: "greenTransparentLg", children: "Javascript" },
        //   { children: "HTML" },
        // ]}
      >
        <p>
          Customers can add items to their card, mutate the number of items, and
          checkout using Stripe. Customers can add items to their card, mutate
          the number of items, and checkout using Stripe. Customers can add
          items to their card, mutate the number of items, and checkout using
          Stripe. Customers can add items to their card, mutate the number of
          items, and checkout using Stripe.
        </p>
      </LookingGlassDescriptionContent>
    </DetailedImageShowcase>
    <DetailedImageShowcase
      imageURL={"https://picsum.photos/800/450?random"}
      lookingGlassContainerProps={{
        bottomTabs: [
          {
            label: "View on Github",
            color: "purpleS400O10",
            href: "https://github.com/PhoenixFieryn/react-ecommerce",
          },
          {
            label: "View Demo",
            color: "skyS400O10",
            href: "https://google.com",
          },
        ],
      }}
    >
      <LookingGlassDescriptionContent
        title="React eCommerce Shop"
        // pillNodes={[
        //   { color: "skyTransparentLg", children: "React" },
        //   { color: "skyTransparentLg", children: "SCSS" },
        //   { color: "redTransparentLg", children: "Node" },
        //   { color: "redTransparentLg", children: "ExpressJS" },
        //   { color: "purpleTransparentLg", children: "MongoDB" },
        //   { color: "greenTransparentLg", children: "Javascript" },
        //   { children: "HTML" },
        // ]}
      >
        <p>
          Customers can add items to their card, mutate the number of items, and
          checkout using Stripe. Customers can add items to their card, mutate
          the number of items, and checkout using Stripe.
        </p>
      </LookingGlassDescriptionContent>
    </DetailedImageShowcase>
    <DetailedImageShowcase
      imageURL={"https://picsum.photos/800/450?random"}
      lookingGlassContainerProps={{
        bottomTabs: [
          {
            label: "View on Github",
            color: "purpleS400O10",
            href: "https://github.com/PhoenixFieryn/react-ecommerce",
          },
          {
            label: "View Demo",
            color: "skyS400O10",
            href: "https://google.com",
          },
        ],
      }}
    >
      <LookingGlassDescriptionContent
        title="React eCommerce Shop"
        // pillNodes={[
        //   { color: "skyTransparentLg", children: "React" },
        //   { color: "skyTransparentLg", children: "SCSS" },
        //   { color: "redTransparentLg", children: "Node" },
        //   { color: "redTransparentLg", children: "ExpressJS" },
        //   { color: "purpleTransparentLg", children: "MongoDB" },
        //   { color: "greenTransparentLg", children: "Javascript" },
        //   { children: "HTML" },
        // ]}
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
    backgroundImage={"/images/light_streak_1_fade_small.png"}
  >
    <div
      className={
        "grid grid-cols-3 w-full safari-transform-fix rounded-image drop-shadow-image-lg"
      }
    >
      <div className="py-4 rotate3d-right">
        <Image
          src={"https://picsum.photos/800/450?random"}
          alt="gallery showcase image"
          width={800}
          height={450}
        />
      </div>

      <div className="py-4 z-10">
        <Image
          src={"https://picsum.photos/800/450?random"}
          alt="gallery showcase image"
          width={800}
          height={450}
        />
      </div>

      <div className="py-4 rotate3d-left">
        <Image
          src={"https://picsum.photos/800/450?random"}
          alt="gallery showcase image"
          width={800}
          height={450}
        />
      </div>
    </div>
    <div className="mx-auto">
      {/*<Button size="md" href="/gallery">*/}
      {/*  Gallery <HiChevronRight />*/}
      {/*</Button>*/}
    </div>

    <LookingGlassContainer>
      <LookingGlassDescriptionContent
        title="Tools and Equipment Used"
        // pillNodes={[
        //   { children: "Photoshop", color: "skyTransparentLg" },
        //   { children: "Illustrator", color: "skyTransparentLg" },
        //   { children: "After Effects", color: "redTransparentLg" },
        //   { children: "Red Giant TRAPCODE", color: "redTransparentLg" },
        //   { children: "Cinema4D", color: "greenTransparentLg" },
        //   { children: "Octane Render", color: "greenTransparentLg" },
        //   { children: "Pixel Sort" },
        //   { children: "Wacom Tablet" },
        //   { children: "Sony α6300" },
        // ]}
      ></LookingGlassDescriptionContent>
    </LookingGlassContainer>
  </PrimarySection>
);

const hobbySection = (
  <PrimarySection
    title="Full-Time Hobbyist"
    subtitle=""
    backgroundImage={"/images/light_streak_7.png"}
  >
    <LookingGlassContainer>
      <LookingGlassDescriptionContent
        title="Speaker Projects"
        // pillNodes={[
        //   { children: "Audio Engineering", color: "redTransparentLg" },
        //   { children: "OnShape CAD", color: "redTransparentLg" },
        //   { children: "Carpentry" },
        // ]}
      >
        I design and build high quality speaker systems for my personal use.
      </LookingGlassDescriptionContent>
    </LookingGlassContainer>
    <LookingGlassContainer>
      <LookingGlassDescriptionContent
        title="Building Tools and Guides for Communities"
        // pillNodes={[
        //   { children: "Javascript", color: "greenTransparentLg" },
        //   { children: "JQuery", color: "greenTransparentLg" },
        //   { children: "HTML" },
        //   { children: "CSS" },
        //   { children: "Data-mining" },
        // ]}
      >
        In the past, I&apos;ve created tools and guides for gaming communities
        to use. It was incredibly rewarding to share my knowledge with the
        community, learn from other knowledgeable individuals, as well as taking
        feedback and acting on it.
      </LookingGlassDescriptionContent>
    </LookingGlassContainer>
    <LookingGlassContainer>
      <LookingGlassDescriptionContent
        title="Leading Teams for Hackathons and Non-Profits"
        // pillNodes={[
        //   { children: "React", color: "skyTransparentLg" },
        //   { children: "Storybook", color: "skyTransparentLg" },
        //   { children: "Photoshop", color: "skyTransparentLg" },
        //   { children: "Illustrator", color: "skyTransparentLg" },
        //   { children: "Node.JS", color: "redTransparentLg" },
        //   { children: "ExpressJS", color: "redTransparentLg" },
        //   { children: "EJS", color: "redTransparentLg" },
        //   { children: "Heroku", color: "redTransparentLg" },
        //   { children: "Firebase", color: "redTransparentLg" },
        //   { children: "Javascript", color: "greenTransparentLg" },
        //   { children: "HTML" },
        //   { children: "CSS" },
        //   { children: "Teaching" },
        //   { children: "Project Management" },
        // ]}
      >
        I&apos;ve spearheaded teams for hackathons and non-profits to create an
        impact on communities as well as my peers. In these projects, I&apos;ve
        taken president, project manager, as well as mentor roles.
      </LookingGlassDescriptionContent>
    </LookingGlassContainer>
    <LookingGlassContainer>
      <LookingGlassDescriptionContent
        title="Bird Watching"
        // pillNodes={[{ children: "Sony α6300" }]}
      >
        I enjoy taking a break from work and technology to observe, feed, and
        house birds in my backyard. It&apos;s extremely rewarding to gain their
        trust where they will comfortably flitter around me.
      </LookingGlassDescriptionContent>
    </LookingGlassContainer>
    <LookingGlassContainer>
      <LookingGlassDescriptionContent title="Livestreaming">
        In the past, I have been a live streamer on Twitch. It was a wonderful
        opportunity to make friends and build a closely-knit community.
      </LookingGlassDescriptionContent>
    </LookingGlassContainer>
  </PrimarySection>
);

type Props = NextPageWithLayout & {
  page: StrapiPages;
};

const Home = ({ page }: Props) => {
  return (
    <>
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
      <div className={"mt-8"}>
        <Page staticStrapiData={page} />
      </div>
    </>
  );

  // return (
  //   <div>
  //     <Head>
  //       <title>Austin Hou - Home</title>
  //       <meta
  //         name="description"
  //         content="Full stack software engineer, UI/UX designer, artist, and perhaps with too many hobbies."
  //       />
  //     </Head>
  //     <div className={cx("max-w-7xl mx-auto px-4")}>
  //       <div className={cx("top-52 z-10 absolute")}>
  //         <div
  //           className={cx(
  //             "text-bold",
  //             "drop-shadow-lg-white text-6xl font-black",
  //             "dark:drop-shadow-lg dark:text-white"
  //           )}
  //         >
  //           Hi, I&apos;m a...
  //         </div>
  //       </div>
  //     </div>
  //     <div className={cx("mb-8 flex flex-col sm:gap-32")}>
  //       {fullStackDeveloperSection}
  //       {designerSection}
  //       {hobbySection}
  //     </div>
  //   </div>
  // );
};

Home.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <div>
      <GradientAnimation />
      <NavigationLayout>{page}</NavigationLayout>
    </div>
  );
};

export async function getStaticProps() {
  const { data } = await client.query({ query: GetHomePageDocument });

  return {
    props: { page: data.homePage as StrapiPages },
  };
}

export default Home;
