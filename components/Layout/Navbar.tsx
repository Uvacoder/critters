import { Box, List } from "@mantine/core";
import { NavLink } from "components/common";

export const Navbar = () => {
  return (
    <Box component="header">
      <Box component="a" href="#main-content" className="content-skip">
        Skip to main content
      </Box>
      <Box component="nav">
        <List
          role="menubar"
          aria-label="main site navigation"
          listStyleType="none"
        >
          <List.Item role="none">
            <NavLink to="/">Home</NavLink>
          </List.Item>
          <List.Item role="none">
            <NavLink to="/account">Account</NavLink>
          </List.Item>
        </List>
      </Box>
    </Box>
  );
};
