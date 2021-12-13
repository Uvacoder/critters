import { Text, Heading, Flex } from "@chakra-ui/react";
import { MainLayout } from "components/Layout";

const Custom404 = () => {
  return (
    <MainLayout title="404 - this page does not exist!">
      <Flex direction="column" justifyContent="center" h="100%" mt="15rem">
        <Text
          fontWeight="semibold"
          color="rgb(49, 130, 206)"
          textTransform="uppercase"
          fontSize="sm"
        >
          404 error
        </Text>
        <Heading as="h1" fontSize="6xl">
          Page not found
        </Heading>
        <Text color="gray.500" fontSize="lg">
          Seems like the page you're looking for doesn't exist.
        </Text>
      </Flex>
    </MainLayout>
  );
};

export default Custom404;
