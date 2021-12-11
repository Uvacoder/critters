import type { NextPage } from "next";
import { useQuery } from "@apollo/client";
import { useSession } from "next-auth/react";
import { MainLayout } from "components/Layout";
import { Heading, Box } from "@chakra-ui/react";
import { SearchFilter } from "components/Elements";

const Home: NextPage = () => {
  const { data: session, status } = useSession();

  console.log(session, status);

  return (
    <MainLayout title="home">
      <Box display="flex" justifyContent="center">
        <Heading
          as="h1"
          fontSize="4xl"
          fontWeight="bold"
          textAlign="center"
          mt="3rem"
          w="md"
        >
          Help pet owners reunite with their pets.
        </Heading>
      </Box>
      <SearchFilter />
    </MainLayout>
  );
};

export default Home;
