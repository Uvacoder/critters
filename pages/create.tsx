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
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { MainLayout } from "components/Layout";
import { Formik, Form, Field } from "formik";

const Create = () => {
  return (
    <MainLayout title="Create a new post">
      <Box padding="1rem">
        <Heading
          as="h1"
          fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
          fontWeight="bold"
        >
          Create a new post
        </Heading>
        <Formik
          initialValues={{
            name: "",
            description: "",
            status: "",
            date: "",
            neighbourhood: "",
            rewardAmount: 0,
            reward: false,
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
                <Box as="fieldset">
                  <Text as="legend">Add some information about your pet</Text>
                  <Field name="name">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={form.errors.name && form.touched.name}
                        isRequired
                      >
                        <FormLabel htmlFor="name">name</FormLabel>
                        <Input {...field} id="name" variant="filled" />
                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="description">
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          form.errors.description && form.touched.description
                        }
                        isRequired
                      >
                        <FormLabel htmlFor="description">description</FormLabel>
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
                  <Field name="species">
                    {({ field, form }) => {
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
                <Box as="fieldset">
                  <Text as="legend">I have</Text>
                  <Field name="status">
                    {({ field }) => {
                      const { onChange, ...rest } = field;
                      return (
                        <FormControl isRequired>
                          <FormLabel htmlFor="status" srOnly>
                            Status
                          </FormLabel>
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
                          Date {values.status === "lost" ? "missing" : "found"}
                        </FormLabel>
                        <Input
                          {...field}
                          id="date"
                          type="date"
                          variant="filled"
                        />
                        <FormErrorMessage>{form.errors.date}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </Box>
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
                          <option value="richmond hill">Richmond hill</option>
                        </Select>
                        <FormErrorMessage>
                          {form.errors.neighbourhood}
                        </FormErrorMessage>
                      </FormControl>
                    );
                  }}
                </Field>
                <Field name="reward">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.reward && form.touched.reward}
                      isRequired
                    >
                      <FormLabel htmlFor="reward">reward</FormLabel>
                      <Checkbox colorScheme="blue" {...field}>
                        Add an reward for this post?
                      </Checkbox>
                      <FormErrorMessage>{form.errors.reward}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                {values?.reward && (
                  <Field name="rewardAmount">
                    {({ field, form }) => {
                      const { onChange, ...rest } = field;
                      return (
                        <FormControl
                          isInvalid={
                            form.errors.rewardAmount &&
                            form.touched.rewardAmount
                          }
                        >
                          <FormLabel htmlFor="rewardAmount">
                            Reward Amount
                          </FormLabel>
                          <NumberInput
                            onChange={onChange}
                            {...rest}
                            value={values.rewardAmount}
                            max={10000}
                          >
                            <NumberInputField />
                          </NumberInput>
                          <FormErrorMessage>
                            {form.errors.rewardAmount}
                          </FormErrorMessage>
                        </FormControl>
                      );
                    }}
                  </Field>
                )}
                <Button
                  mt={4}
                  colorScheme="blue"
                  isLoading={isSubmitting}
                  type="submit"
                >
                  Create Post
                </Button>
              </Form>
            );
          }}
        </Formik>
      </Box>
    </MainLayout>
  );
};

export default Create;
