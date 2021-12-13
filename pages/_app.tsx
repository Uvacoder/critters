import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "lib/apolloClient";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "styles/theme";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
    <SessionProvider session={session}>
      <ChakraProvider theme={theme}>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </ChakraProvider>
    </SessionProvider>
  );
}

export default MyApp;
