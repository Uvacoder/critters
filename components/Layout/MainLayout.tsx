import { Box, useDisclosure } from "@chakra-ui/react";
import { Auth } from "components/Elements";
import Head from "next/head";
import { ReactNode } from "react";
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
      <Box
        as="main"
        id="main-content"
        maxWidth="6xl"
        margin="auto"
        flexGrow={1}
        py="5rem"
      >
        {children}
      </Box>
    </>
  );
};
