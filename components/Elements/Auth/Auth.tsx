import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Divider,
  Box,
  Text,
  useToast,
  FormErrorMessage,
} from "@chakra-ui/react";
import { signIn } from "next-auth/react";
import { AiOutlineGoogle } from "react-icons/ai";
import { Formik, Form, Field } from "formik";
import { useRef } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const Auth = ({ isOpen, onClose }: Props) => {
  const toast = useToast();

  const initialFocus = useRef();

  return (
    <Modal isOpen={isOpen} onClose={onClose} initialFocusRef={initialFocus}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Log in to critters</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <Formik
            initialValues={{ email: "" }}
            validate={(values) => {
              const errors = {} as { email: string };

              if (!values.email) {
                errors.email = "Please enter an e-mail address";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }

              return errors;
            }}
            onSubmit={({ email }, { setSubmitting }) => {
              signIn("email", { redirect: false, email });
              setSubmitting(false);
              onClose();
              toast({
                position: "top",
                title: "E-mail sent!",
                status: "info",
                description: "Please check your email for a log in link.",
              });
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <Field name="email">
                  {({ field, form }) => (
                    <FormControl
                      mb="3"
                      isRequired
                      isInvalid={form.errors.email}
                    >
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <Input
                        {...field}
                        placeholder="user@example.com"
                        type="email"
                        id="email"
                        ref={initialFocus}
                        autoComplete="on"
                      />
                      <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Button
                  colorScheme="blue"
                  mr={3}
                  w="100%"
                  type="submit"
                  isLoading={isSubmitting}
                >
                  Send magic link to e-mail
                </Button>
              </Form>
            )}
          </Formik>
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
            onClick={() => signIn("google")}
          >
            Log in with Google
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
