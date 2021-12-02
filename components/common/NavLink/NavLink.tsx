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
      <ChakraLink fontWeight="semibold" color="gray.500" textDecoration="none">
        {children}
      </ChakraLink>
    </Link>
  );
};