import type { NextPage } from "next";
import { useQuery } from "@apollo/client";
import { useSession } from "next-auth/react";
import { MainLayout } from "components/Layout";
import { Heading, Box } from "@chakra-ui/react";
import { SearchFilter } from "components/Elements";
import { PostList } from "features/posts/PostList";

const Home: NextPage = () => {
  return (
    <MainLayout title="home">
      <Box display="flex" justifyContent="center" px="1rem">
        <Heading
          as="h1"
          fontSize={{ base: "3xl", md: "4xl", lg: "6xl" }}
          fontWeight="bold"
          textAlign="center"
          maxW="2xl"
        >
          Help pet owners reunite with their pets.
        </Heading>
      </Box>
      <SearchFilter />
      <PostList />
    </MainLayout>
  );
};

export default Home;
