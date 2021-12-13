import { Stack, Spinner, Flex, Text, Grid } from "@chakra-ui/react";
import { useGetPostsQuery } from "hooks/apollo";
import { Post } from "./Post";

const pet = {
  title: "Bring Donny home",
  description: "We are looking for donny, please help us",
  date_missing: new Date().toISOString(),
  reward: true,
  reward_amount: 100,
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
    <Stack padding="1rem">
      {Array.from({ length: 5 }, (_, i) => (
        <Post post={pet} />
      ))}
    </Stack>
  );
};
