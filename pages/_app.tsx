import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_STRAPI_GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
});

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ThemeProvider
      storageKey="theme"
      defaultTheme="system"
      themes={["light", "dark"]}
      attribute="class"
    >
      <ApolloProvider client={client}>
        <div className={"bg-white dark:bg-black"}>
          {getLayout(<Component {...pageProps} />)}
        </div>
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default MyApp;
