import type { NextPage } from "next";
import { useQuery } from "@apollo/client";
import { useSession } from "next-auth/react";
import { MainLayout } from "components/Layout";
import {
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";

const Home: NextPage = () => {
  const { data: session, status } = useSession();

  console.log(session, status);

  return (
    <MainLayout title="home">
      <Text as="h1" fontSize="4xl" fontWeight="bold" textAlign="center">
        Search for a pet
      </Text>
      <Tabs isFitted variant="enclosed">
        <TabList>
          <Tab>Lost</Tab>
          <Tab>Found</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>lost pets</p>
          </TabPanel>
          <TabPanel>
            <p>found pets</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </MainLayout>
  );
};

export default Home;
