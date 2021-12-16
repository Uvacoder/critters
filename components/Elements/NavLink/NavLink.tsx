import Link from "next/link";
import React from "react";
import { Link as ChakraLink } from "@chakra-ui/react";

type Props = {
  to: string;
  children: React.ReactNode;
  [x: string]: any;
};

export const NavLink = ({ to, children, ...rest }: Props) => {
  return (
    <Link href={to}>
      <ChakraLink
        {...rest}
        fontWeight="semibold"
        tabIndex={0}
        p="0.6rem"
        borderRadius="md"
        color="gray.500"
        w="100%"
        display="block"
        style={{ textDecoration: "none" }}
        _hover={{
          bg: "blue.100",
          color: "blue.800",
        }}
        _focus={{
          outline: "4px solid",
          outlineColor: "blue.600",
        }}
        fontSize="sm"
      >
        {children}
      </ChakraLink>
    </Link>
  );
};
