import { Text, Box, LinkBox, LinkOverlay, Flex, Image } from "@chakra-ui/react";
import { MdOutlineAttachMoney } from "react-icons/md";
import { SearchIcon } from "@chakra-ui/icons";
import { FaPaw } from "react-icons/fa";
import { formatDate } from "lib/util";

export const Post = ({ post }) => {
  // crop images with cloudinary before upload
  return (
    <LinkBox
      borderWidth="1px"
      borderRadius="lg"
      maxW={{ base: "100%", md: "sm" }}
      overflow="hidden"
    >
      <Box>
        <Image
          src={post?.critter?.images[0]}
          alt="animal"
          objectFit="cover"
          boxSize="xs"
          w="100%"
        />
      </Box>
      <Box p="4">
        <Text fontWeight="bold" fontSize="xl">
          <LinkOverlay href="#">{post?.critter?.name}</LinkOverlay>
        </Text>
        <Text as="time" dateTime={post.date_missing} color="gray.500">
          Missing since {formatDate(post.date_missing)}
        </Text>
        <Flex alignItems="center">
          <MdOutlineAttachMoney />
          <Text>{post.reward && post.reward_amount}</Text>
        </Flex>
        <Flex alignItems="center" gridGap={2}>
          <SearchIcon />
          <Text>Last seen in the {post.location} area</Text>
        </Flex>
        <Flex alignItems="center" gridGap={2}>
          <FaPaw />
          <Text>{post?.critter?.species}</Text>
        </Flex>
        {/* <Text color="gray.500">{post.description}</Text> */}
      </Box>
    </LinkBox>
  );
};
