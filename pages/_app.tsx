import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { MantineProvider } from "@mantine/core";
import { MainLayout, Navbar } from "components/Layout";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <Navbar />
        <MainLayout title="test">
          <Component {...pageProps} />
        </MainLayout>
      </MantineProvider>
    </SessionProvider>
  );
}

export default MyApp;
