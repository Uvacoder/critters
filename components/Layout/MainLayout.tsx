import { Box } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";

type Props = {
  title: string;
  children: React.ReactNode;
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
      <Box as="main" id="main-content">
        {children}
      </Box>
    </>
  );
};
