import Link from "next/link";
import React from "react";
import { Link as ChakraLink } from "@chakra-ui/react";

type Props = {
  to: string;
  children: React.ReactNode;
};

export const NavLink = ({ to, children }: Props) => {
  return (
    <Link href={to}>
      <ChakraLink
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
