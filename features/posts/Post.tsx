import { Text, Box } from "@chakra-ui/react";

export const Post = ({ post }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg">
      <Text fontWeight="bold" fontSize="2xl">
        {post.title}
      </Text>
      <Text>Missing since {post.date_missing}</Text>
      <Text>{post.reward && post.reward_amount}</Text>
    </Box>
  );
};
