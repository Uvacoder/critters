import { Anchor } from "@mantine/core";
import Link from "next/link";
import React from "react";

type Props = {
  to: string;
  children: React.ReactNode;
};

export const NavLink = ({ to, children }: Props) => {
  return (
    <Anchor component={Link} href={to}>
      <a>{children}</a>
    </Anchor>
  );
};
