import { NavLink } from "components/common";
import {
  Box,
  List,
  ListItem,
  UnorderedList,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Link from "next/link";

export const Navbar = () => {
  return (
    <Box
      as="header"
      padding="1rem"
      borderBottom="1px solid"
      borderColor="gray.200"
    >
      <Box
        as="nav"
        display="flex"
        alignItems="baseline"
        maxWidth="6xl"
        margin="auto"
      >
        <Link href="/">
          <ChakraLink
            fontWeight="bold"
            textDecoration="none"
            fontSize="xl"
            style={{ textDecoration: "none" }}
          >
            critter
          </ChakraLink>
        </Link>
        <UnorderedList
          styleType="none"
          display="flex"
          gridGap="6"
          marginLeft="auto"
        >
          <ListItem>
            <NavLink to="/">Home</NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/account">Account</NavLink>
          </ListItem>
        </UnorderedList>
      </Box>
    </Box>
  );
};
