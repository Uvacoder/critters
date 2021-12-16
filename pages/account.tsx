import {
  Heading,
  Input,
  FormControl,
  FormLabel,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Box,
} from "@chakra-ui/react";
import { MainLayout } from "components/Layout";
import { useSession } from "next-auth/react";

const Account = () => {
  const { data: session } = useSession();
  const { onClose, onOpen, isOpen } = useDisclosure();

  return (
    <MainLayout title="account">
      <Box px="1rem">
        <Heading
          as="h1"
          fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
          fontWeight="semibold"
          mb="10"
        >
          Account
        </Heading>
        <FormControl id="email">
          <FormLabel>Email</FormLabel>
          <Input
            isDisabled
            type="email"
            defaultValue={session?.user?.email}
            colorScheme="blue"
            name="email"
            variant="filled"
            maxW="md"
            mb="4"
          />
        </FormControl>
        <Button colorScheme="red" onClick={onOpen} variant="ghost">
          Delete Account
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              Are you sure you want to delete your account?
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              Deleting your account will also remove any active posts you have.
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost" colorScheme="red" onClick={onClose}>
                Yes, delete my account
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </MainLayout>
  );
};

export default Account;
