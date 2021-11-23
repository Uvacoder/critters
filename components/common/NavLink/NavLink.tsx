import { Box } from "@mantine/core";
import Link from "next/link";
import React from "react";

type Props = {
  to: string;
  children: React.ReactNode;
};

export const NavLink = ({ to, children }: Props) => {
  return (
    <Box component={Link} href={to}>
      <a role="menuitem">{children}</a>
    </Box>
  );
};
