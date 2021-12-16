import { Heading, Flex } from "@chakra-ui/react";
import { MainLayout } from "components/Layout";

const Account = () => {
  return (
    <MainLayout title="account">
      <Heading
        as="h1"
        fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
        fontWeight="semibold"
        mb="10"
      >
        Account
      </Heading>
    </MainLayout>
  );
};

export default Account;
