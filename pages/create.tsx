import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Textarea,
  Text,
  Select,
  Checkbox,
  FormHelperText,
  InputGroup,
  InputLeftAddon,
  Divider,
  VStack,
  Flex,
  useDisclosure,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { MainLayout } from "components/Layout";
import { Formik, Form, Field } from "formik";
import { useRouter } from "next/router";
import { BiDollar } from "react-icons/bi";

const Create = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  return (
    <MainLayout title="Create a new post">
      <Box maxW="4xl">
        <Heading
          as="h1"
          fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
          fontWeight="semibold"
          mb="10"
        >
          Create a new post
        </Heading>
        <Formik
          initialValues={{
            name: "",
            description: "",
            status: "lost",
            date: new Date().toISOString().substring(0, 10),
            neighbourhood: "",
            rewardAmount: 0,
            reward: false,
            humanName: "",
          }}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }, 1000);
          }}
        >
          {({ values, isSubmitting }) => {
            return (
              <Form>
                <Box as="fieldset" mb="10">
                  <Box>
                    <Text as="legend">Pet Information</Text>
                    <Divider my="4" />
                  </Box>
                  <VStack spacing={4} alignItems="start">
                    <Box maxW="md">
                      <Field name="name">
                        {({ field, form }) => (
                          <FormControl
                            isInvalid={form.errors.name && form.touched.name}
                            isRequired
                          >
                            <FormLabel htmlFor="name">name</FormLabel>
                            <Input {...field} id="name" variant="filled" />
                            <FormErrorMessage>
                              {form.errors.name}
                            </FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
                    </Box>
                    <Field name="description">
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={
                            form.errors.description && form.touched.description
                          }
                          isRequired
                        >
                          <FormLabel htmlFor="description">
                            description
                          </FormLabel>
                          <Textarea
                            {...field}
                            id="description"
                            resize="vertical"
                            variant="filled"
                          />
                          <FormErrorMessage>
                            {form.errors.description}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Box maxW="md">
                      <Field name="species">
                        {({ field }) => {
                          const { onChange, ...rest } = field;
                          return (
                            <FormControl id="species" isRequired>
                              <FormLabel>Species</FormLabel>
                              <Select
                                placeholder="Select species"
                                variant="filled"
                                onChange={onChange}
                                {...rest}
                              >
                                <option value="dog">Dog</option>
                                <option value="cat">Cat</option>
                                <option value="bird">Bird</option>
                              </Select>
                            </FormControl>
                          );
                        }}
                      </Field>
                    </Box>
                  </VStack>
                </Box>
                <Box as="fieldset" mb="10">
                  <Box>
                    <Text as="legend">Location &#38; Date</Text>
                    <Divider my="4" />
                  </Box>
                  <VStack spacing={4}>
                    <Field name="status">
                      {({ field }) => {
                        const { onChange, ...rest } = field;
                        return (
                          <FormControl isRequired>
                            <FormLabel htmlFor="status">I have</FormLabel>
                            <RadioGroup id="status" {...rest}>
                              <Stack direction="row">
                                <Radio value="lost" onChange={onChange}>
                                  Lost a pet
                                </Radio>
                                <Radio value="found" onChange={onChange}>
                                  Found a pet
                                </Radio>
                              </Stack>
                            </RadioGroup>
                          </FormControl>
                        );
                      }}
                    </Field>
                    <Field name="date">
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={form.errors.name && form.touched.date}
                          isRequired
                        >
                          <FormLabel htmlFor="date">
                            Date{" "}
                            {values.status === "lost" ? "missing" : "found"}
                          </FormLabel>
                          <Input
                            {...field}
                            id="date"
                            type="date"
                            variant="filled"
                          />
                          <FormErrorMessage>
                            {form.errors.date}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="neighbourhood">
                      {({ field, form }) => {
                        const { onChange, ...rest } = field;
                        return (
                          <FormControl id="neighbourhood" isRequired>
                            <FormLabel>Neighbourhood</FormLabel>
                            <Select
                              placeholder="Select neighbourhood"
                              variant="filled"
                              onChange={onChange}
                              {...rest}
                            >
                              <option value="etobicoke">Etobicoke</option>
                              <option value="north york">North York</option>
                              <option value="richmond hill">
                                Richmond hill
                              </option>
                            </Select>
                            <FormErrorMessage>
                              {form.errors.neighbourhood}
                            </FormErrorMessage>
                          </FormControl>
                        );
                      }}
                    </Field>
                  </VStack>
                </Box>
                <Box as="fieldset" mb="10">
                  <Box>
                    <Text as="legend">Reward</Text>
                    <Divider my="4" />
                  </Box>
                  <VStack spacing={4}>
                    <Field name="reward">
                      {({ field }) => (
                        <FormControl>
                          <FormLabel htmlFor="reward">reward</FormLabel>
                          <Checkbox colorScheme="blue" {...field}>
                            Add an reward for this post?
                          </Checkbox>
                        </FormControl>
                      )}
                    </Field>
                    {values?.reward && (
                      <Field name="rewardAmount">
                        {({ field, form }) => {
                          return (
                            <FormControl
                              isRequired={values?.reward}
                              isInvalid={
                                form.errors.rewardAmount &&
                                form.touched.rewardAmount
                              }
                            >
                              <FormLabel htmlFor="rewardAmount">
                                Reward Amount
                              </FormLabel>
                              <InputGroup>
                                <InputLeftAddon children={<BiDollar />} />
                                <Input
                                  type="number"
                                  {...field}
                                  id="rewardAmount"
                                  min={0}
                                  max={10000}
                                />
                              </InputGroup>
                              <FormHelperText>
                                The reward cannot exceed $10,000.
                              </FormHelperText>
                              <FormErrorMessage>
                                {form.errors.rewardAmount}
                              </FormErrorMessage>
                            </FormControl>
                          );
                        }}
                      </Field>
                    )}
                  </VStack>
                </Box>
                <Box as="fieldset" mb="8">
                  <Box>
                    <Text as="legend">Contact information</Text>
                    <Divider my="4" />
                  </Box>
                  <Flex gridGap="4" direction={{ base: "column", md: "row" }}>
                    <Field name="humanName">
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={
                            form.errors.humanName && form.touched.humanName
                          }
                          isRequired
                        >
                          <FormLabel htmlFor="humanName">First Name</FormLabel>
                          <Input {...field} id="humanName" variant="filled" />
                          <FormErrorMessage>
                            {form.errors.humanName}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="phone">
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={form.errors.phone && form.touched.phone}
                          isRequired
                        >
                          <FormLabel htmlFor="phone">Phone Number</FormLabel>
                          <Input
                            {...field}
                            id="phone"
                            variant="filled"
                            type="tel"
                            placeholder="123-456-7890"
                          />
                          <FormHelperText>
                            Your phone number will be displayed publicly so
                            people can contact you, we will never contact you
                            directly for anything.
                          </FormHelperText>
                          <FormErrorMessage>
                            {form.errors.phone}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                  </Flex>
                </Box>
                <Flex gridGap={2} justifyContent="flex-end">
                  <Button colorScheme="red" variant="ghost" onClick={onOpen}>
                    Cancel
                  </Button>
                  <Button
                    colorScheme="blue"
                    isLoading={isSubmitting}
                    type="submit"
                  >
                    Create Post
                  </Button>
                </Flex>
              </Form>
            );
          }}
        </Formik>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Are you sure you want to cancel?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            This listing will not be created and you will be taken back to the
            main page, proceed?
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              colorScheme="blue"
              onClick={() => {
                onClose();
                router.push("/");
              }}
            >
              OK
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </MainLayout>
  );
};

export default Create;
