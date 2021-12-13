import { Auth, NavLink } from "components/Elements";
import {
  Box,
  Button,
  ListItem,
  UnorderedList,
  Link as ChakraLink,
  useDisclosure,
  Icon,
  Flex,
} from "@chakra-ui/react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { FaPaw } from "react-icons/fa";

export const Navbar = () => {
  const { data: session } = useSession();

  const { isOpen, onClose, onOpen } = useDisclosure();
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
        alignItems="center"
        maxWidth="6xl"
        margin="auto"
      >
        <Flex alignItems="center" gridGap={2}>
          <Icon as={FaPaw} h={6} w={6} />
          <Link href="/">
            <ChakraLink
              fontWeight="bold"
              fontSize="xl"
              tabIndex={0}
              colorScheme="blue"
              _focus={{
                outline: "4px solid",
                outlineColor: "blue.600",
              }}
              style={{ textDecoration: "none" }}
            >
              critters
            </ChakraLink>
          </Link>
        </Flex>
        <UnorderedList
          styleType="none"
          display="flex"
          gridGap="6"
          alignItems="center"
          marginLeft="auto"
        >
          {!session?.user ? (
            <>
              <ListItem>
                <Button colorScheme="blue" onClick={onOpen}>
                  Login
                </Button>
              </ListItem>
            </>
          ) : (
            <>
              <ListItem>
                <Button colorScheme="blue">Create a new post</Button>
              </ListItem>
              <ListItem>
                <NavLink to="/account">Account</NavLink>
              </ListItem>
              <ListItem>
                <NavLink to="#" onClick={() => signOut({ redirect: false })}>
                  Logout
                </NavLink>
              </ListItem>
            </>
          )}
        </UnorderedList>
      </Box>
      <Auth isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};
