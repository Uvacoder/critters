import { Box, Heading, Text } from "@chakra-ui/react";
import { MainLayout } from "components/Layout";
import { Component } from "react";

export class Error extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  render() {
    // @ts-ignore
    if (this.state.hasError) {
      return (
        <MainLayout title="There's been an error!">
          <Box mt="15rem">
            <Text
              fontWeight="semibold"
              color="rgb(49, 130, 206)"
              textTransform="uppercase"
              fontSize="sm"
            >
              well that's awkward...
            </Text>
            <Heading as="h1" fontSize="6xl">
              There's been an error!
            </Heading>
            <Text color="gray.500" fontSize="lg">
              Well if it isn't the consequences of my own actions, sorry about
              that!
            </Text>
          </Box>
        </MainLayout>
      );
    }
    return this.props.children;
  }
}
