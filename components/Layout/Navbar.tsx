import { Box, List, Text } from "@mantine/core";
import { NavLink } from "components/common";
import Link from "next/link";

export const Navbar = () => {
  return (
    <Box component="header">
      <Box
        component="nav"
        sx={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          borderBottom: "1px solid red",
          padding: "0.5rem 2rem",
        }}
      >
        <Text
          variant="gradient"
          gradient={{ from: "indigo", to: "cyan", deg: 45 }}
          weight={700}
          size="xl"
        >
          critter
        </Text>
        <List
          aria-label="main site navigation"
          listStyleType="none"
          sx={{ display: "flex", gap: "0.8rem" }}
        >
          <List.Item>
            <NavLink to="/">Home</NavLink>
          </List.Item>
          <List.Item>
            <NavLink to="/account">Account</NavLink>
          </List.Item>
        </List>
      </Box>
    </Box>
  );
};
