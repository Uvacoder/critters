import { Stack, Spinner, Flex, Text } from "@chakra-ui/react";
import { useGetPostsQuery } from "hooks/apollo";

export const PostList = () => {
  const { data, error, loading } = useGetPostsQuery();

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

  if (!data.posts) return null;

  return <Stack>hello</Stack>;
};
