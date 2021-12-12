import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Divider,
  Box,
  Text,
} from "@chakra-ui/react";
import { AiOutlineGoogle } from "react-icons/ai";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const Auth = ({ isOpen, onClose }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Log in to critter</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <form>
            <FormControl mb="3">
              <FormLabel>Email</FormLabel>
              <Input placeholder="user@example.com" type="email" />
            </FormControl>
            <Button colorScheme="blue" mr={3} w="100%">
              Send magic link to e-mail
            </Button>
          </form>
          <Box display="flex" alignItems="center" my={4}>
            <Divider />
            <Text px="4" color="gray.500">
              or
            </Text>
            <Divider />
          </Box>
          <Button
            colorScheme="red"
            w="100%"
            aria-label="Log in with your google account"
            leftIcon={<AiOutlineGoogle />}
          >
            Log in with Google
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
