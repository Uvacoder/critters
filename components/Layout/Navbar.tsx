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
  IconButton,
  SlideFade,
} from "@chakra-ui/react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { FaPaw } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { useRouter } from "next/router";
import { useState } from "react";

export const Navbar = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Box
      as="header"
      padding="1rem"
      borderBottom="1px solid"
      borderColor="gray.200"
      mb="4em"
    >
      <Box
        as="nav"
        display="flex"
        alignItems="center"
        maxWidth="8xl"
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
          display={{ base: "none", lg: "flex" }}
          gridGap="3"
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
                <Button
                  colorScheme="blue"
                  onClick={() => router.push("/create")}
                >
                  Create a new post
                </Button>
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
        <IconButton
          aria-label="mobile navigation menu"
          icon={<FiMenu />}
          ml="auto"
          variant="ghost"
          colorScheme="blue"
          display={{ base: "flex", lg: "none" }}
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        />
      </Box>
      <SlideFade in={showMobileMenu} unmountOnExit>
        <UnorderedList
          shadow="lg"
          styleType="none"
          p="4"
          style={{ marginInlineStart: 0 }}
          borderRadius="md"
          spacing={4}
          display={{ base: "block", lg: "none" }}
        >
          {!session?.user ? (
            <>
              <ListItem>
                <Button
                  w="100%"
                  colorScheme="blue"
                  onClick={() => {
                    setShowMobileMenu(!showMobileMenu);
                    onOpen();
                  }}
                >
                  Login
                </Button>
              </ListItem>
            </>
          ) : (
            <>
              <ListItem>
                <Button
                  colorScheme="blue"
                  onClick={() => router.push("/create")}
                  w="100%"
                >
                  Create a new post
                </Button>
              </ListItem>
              <ListItem>
                <NavLink to="/account">Account</NavLink>
              </ListItem>
              <ListItem>
                <NavLink
                  to="#"
                  onClick={() => {
                    onClose();
                    signOut({ redirect: false });
                  }}
                >
                  Logout
                </NavLink>
              </ListItem>
            </>
          )}
        </UnorderedList>
      </SlideFade>
      <Auth isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};
