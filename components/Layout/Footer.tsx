import { Box, Divider, Icon, Flex, Link, Text } from "@chakra-ui/react";
import { FaGithub, FaTwitterSquare } from "react-icons/fa";

export const Footer = () => {
  return (
    <Box as="footer" maxWidth="8xl" margin="auto" py="4rem" px="1rem">
      <Divider mb="2rem" />
      <Flex justifyContent="space-between" alignItems="center">
        <Text color="gray.500">Made in Toronto by Dane.</Text>
        <Flex color="gray.500" justifyContent="flex-end" gridGap="3">
          <Link
            isExternal
            href="https://github.com/nulfrost/critters"
            aria-label="View this project on github, opens in a new tab"
          >
            <Icon as={FaGithub} h={8} w={8} />
          </Link>
          <Link
            isExternal
            href="https://twitter.com/hybridearth"
            aria-label="Visit Dane's profile on twitter, opens in a new tab"
          >
            <Icon as={FaTwitterSquare} h={8} w={8} />
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};
