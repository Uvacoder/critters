import { Auth, NavLink } from "components/Elements";
import {
  Box,
  Button,
  ListItem,
  UnorderedList,
  Link as ChakraLink,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { useSession } from "next-auth/react";

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
        alignItems="baseline"
        maxWidth="6xl"
        margin="auto"
      >
        <Link href="/">
          <ChakraLink
            fontWeight="bold"
            textDecoration="none"
            fontSize="xl"
            tabIndex={0}
            _focus={{
              outline: "4px solid",
              outlineColor: "blue.600",
            }}
            style={{ textDecoration: "none" }}
          >
            critter
          </ChakraLink>
        </Link>
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
                <NavLink to="/account">Account</NavLink>
              </ListItem>
              <ListItem>
                <NavLink to="/api/auth/signout">Logout</NavLink>
              </ListItem>
            </>
          )}
        </UnorderedList>
      </Box>
      <Auth isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};
