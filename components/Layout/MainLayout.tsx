import { Box } from "@chakra-ui/react";
import Head from "next/head";
import { ReactNode } from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

type Props = {
  title: string;
  children: ReactNode;
};

export const MainLayout = ({ title, children }: Props) => {
  // add SEO
  return (
    <>
      <Head>
        <title>critters | {title}</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Navbar />
      <Box px="1em" flex="1">
        <Box as="main" id="main-content" maxWidth="8xl" margin="auto">
          {children}
        </Box>
      </Box>
      <Box>
        <Footer />
      </Box>
    </>
  );
};
