import type { NextPage } from "next";
import { useQuery } from "@apollo/client";
import { useSession } from "next-auth/react";
import { MainLayout } from "components/Layout";
import {
  Text,
  Grid,
  GridItem,
  Box,
  Select,
  Input,
  InputGroup,
  InputRightElement,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const Home: NextPage = () => {
  const { data: session, status } = useSession();

  console.log(session, status);

  return (
    <MainLayout title="home">
      <Box display="flex" justifyContent="center">
        <Text
          as="h1"
          fontSize="4xl"
          fontWeight="bold"
          textAlign="center"
          mt="3rem"
          w="md"
        >
          Help pet owners reunite with their pets.
        </Text>
      </Box>
      <Box mt="3rem">
        <form>
          <Grid h="auto" templateColumns="repeat(3, 1fr)" gap={4}>
            <GridItem colSpan={4}>
              <FormControl id="search">
                <FormLabel srOnly>Search for pet</FormLabel>
                <InputGroup>
                  <Input
                    placeholder="Search by name or post title"
                    size="md"
                    variant="filled"
                    type="search"
                  />
                  <InputRightElement children={<SearchIcon />} />
                </InputGroup>
              </FormControl>
            </GridItem>
          </Grid>
          <Box as="fieldset" mt="1rem">
            <Text as="legend" fontWeight="bold" fontSize="lg">
              Filter options
            </Text>
            <Grid h="auto" templateColumns="repeat(4, 1fr)" gap={4}>
              <GridItem>
                <FormControl id="species">
                  <FormLabel>Species</FormLabel>
                  <Select placeholder="Select species" variant="filled">
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                    <option value="bird">Bird</option>
                  </Select>
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl id="neighbourhood">
                  <FormLabel>Neighbourhood</FormLabel>
                  <Select placeholder="Select neighbourhood" variant="filled">
                    <option value="etobicoke">Etobicoke</option>
                    <option value="north york">North York</option>
                    <option value="richmond hill">Richmond hill</option>
                  </Select>
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl id="dateStart">
                  <FormLabel>Date missing start</FormLabel>
                  <Input type="date" variant="filled" />
                </FormControl>
              </GridItem>
              <GridItem>
                <FormControl id="dateEnd">
                  <FormLabel>Date missing end</FormLabel>
                  <Input
                    type="date"
                    variant="filled"
                    disabled
                    value={new Date().toISOString().substring(0, 10)}
                  />
                </FormControl>
              </GridItem>
            </Grid>
          </Box>
          <Button type="submit" w="full" mt="2rem" colorScheme="blue">
            Search
          </Button>
        </form>
      </Box>
    </MainLayout>
  );
};

export default Home;
