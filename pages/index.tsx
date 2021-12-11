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
          mt="4rem"
          w="md"
        >
          Help pet owners reunite with their pets.
        </Text>
      </Box>
      <Box>
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
          </Grid>
        </form>
      </Box>
    </MainLayout>
  );
};

export default Home;
