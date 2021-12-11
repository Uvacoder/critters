import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Grid,
  GridItem,
  FormControl,
  FormLabel,
  InputGroup,
  Input,
  InputRightElement,
  Select,
  Button,
  Text,
  Collapse,
  Flex,
  IconButton,
} from "@chakra-ui/react";
import { useState } from "react";
import { BsFilter } from "react-icons/bs";

export const SearchFilter = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Box mt="3rem">
      <form>
        <Flex gridGap={4}>
          <FormControl id="search" flex="1">
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
          <IconButton
            onClick={() => setIsVisible(!isVisible)}
            colorScheme="blue"
            aria-label="Add filters to your search results"
            icon={<BsFilter />}
          >
            Show Filters
          </IconButton>
        </Flex>
        <Collapse in={isVisible} animateOpacity>
          <Box as="fieldset" mt="1rem">
            <Text as="legend" fontWeight="bold" fontSize="lg">
              Filter options
            </Text>
            <Flex gridGap={4}>
              <FormControl id="species">
                <FormLabel>Species</FormLabel>
                <Select placeholder="Select species" variant="filled">
                  <option value="dog">Dog</option>
                  <option value="cat">Cat</option>
                  <option value="bird">Bird</option>
                </Select>
              </FormControl>
              <FormControl id="neighbourhood">
                <FormLabel>Neighbourhood</FormLabel>
                <Select placeholder="Select neighbourhood" variant="filled">
                  <option value="etobicoke">Etobicoke</option>
                  <option value="north york">North York</option>
                  <option value="richmond hill">Richmond hill</option>
                </Select>
              </FormControl>
              <FormControl id="dateStart">
                <FormLabel>Date missing start</FormLabel>
                <Input type="date" variant="filled" />
              </FormControl>
              <FormControl id="dateEnd">
                <FormLabel>Date missing end</FormLabel>
                <Input
                  type="date"
                  variant="filled"
                  disabled
                  value={new Date().toISOString().substring(0, 10)}
                />
              </FormControl>
            </Flex>
          </Box>
        </Collapse>
        <Button type="submit" w="full" mt="2rem" colorScheme="blue">
          Search
        </Button>
      </form>
    </Box>
  );
};
