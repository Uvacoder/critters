import { Text, Box, LinkBox, LinkOverlay, Flex } from "@chakra-ui/react";
import { MdOutlineAttachMoney } from "react-icons/md";
import { SearchIcon } from "@chakra-ui/icons";
import { FaPaw } from "react-icons/fa";
import { formatDate } from "lib/util";
import { formatDistance } from "date-fns";
import { useRouter } from "next/router";
import Image from "next/image";

export const Post = ({ post }) => {
  // crop images with cloudinary before upload

  const router = useRouter();
  return (
    <LinkBox
      role="link"
      aria-label={`View missing pet post for ${post?.critter?.name}`}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      as="article"
      tabIndex={0}
      _focus={{
        outline: "4px solid",
        outlineColor: "blue.600",
      }}
      onKeyPress={(e) => {
        e.preventDefault();
        if (e.code === "Enter" || e.code === "Space") router.push("/account");
      }}
    >
      <Box w="100%" position="relative">
        <Image
          src={post?.critter?.images[0]}
          alt={`Photo of pet named ${post?.critter?.name}`}
          layout="responsive"
          width={460}
          height={450}
        />
      </Box>
      <Box p="4" as="section">
        <Text fontWeight="bold" fontSize="xl" isTruncated as="h2">
          <LinkOverlay tabIndex={-1} href="#">
            {post?.critter?.name}
          </LinkOverlay>
        </Text>
        <Text as="time" dateTime={post.date_missing} color="gray.500">
          {post?.status === "LOST" ? "Missing since " : "Found on "}{" "}
          {formatDate(post.date_missing)}
        </Text>
        <Flex alignItems="center">
          <MdOutlineAttachMoney />
          <Text>{post.reward && post.reward_amount} reward</Text>
        </Flex>
        <Flex alignItems="center" gridGap={2}>
          <SearchIcon />
          <Text>Last seen in the {post.location} area</Text>
        </Flex>
        <Flex alignItems="center" gridGap={2}>
          <FaPaw />
          <Text>{post?.critter?.species}</Text>
        </Flex>
      </Box>
      <Flex as="footer" p="4" color="gray.500">
        <Text>
          Posted{" "}
          <Text as="time" dateTime={post.createdAt}>
            {formatDistance(new Date(), new Date(post.createdAt))}
          </Text>{" "}
          ago
        </Text>
      </Flex>
    </LinkBox>
  );
};
