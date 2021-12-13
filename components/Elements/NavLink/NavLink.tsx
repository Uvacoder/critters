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
        color="gray.500"
        style={{ textDecoration: "none" }}
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
