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
  return (
    <>
      <Head>
        <title>{title}</title>
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
        marginTop="2rem"
      >
        {children}
      </Box>
    </>
  );
};
