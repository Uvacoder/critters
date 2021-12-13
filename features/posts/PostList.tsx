import { Spinner, Flex, Text, Grid, GridItem } from "@chakra-ui/react";
import { useGetPostsQuery } from "hooks/apollo";
import { Post } from "./Post";

const pet = {
  title: "Bring Donny home",
  description: "We are looking for donny, please help us",
  date_missing: new Date().toISOString(),
  reward: true,
  reward_amount: 200,
  location: "Richmond Hill",
  createdAt: new Date().toISOString(),
  status: "LOST",
  critter: {
    name: "Donny",
    images: ["https://i.redd.it/3yrjfmc2x6i21.jpg"],
    species: "Dog",
  },
  user: {
    name: "Dane",
  },
};

export const PostList = () => {
  const { data, error, loading } = useGetPostsQuery();

  console.log(error);

  if (error) {
    return <Text size="lg">There was an error loading the data.</Text>;
  }

  if (loading) {
    return (
      <Flex justify="center">
        <Spinner size="lg" />
      </Flex>
    );
  }

  // if (!data.posts) return null;

  return (
    <Grid
      padding="1rem"
      templateColumns={{
        base: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
      }}
      gridGap={3}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <GridItem>
          <Post post={pet} />
        </GridItem>
      ))}
    </Grid>
  );
};
