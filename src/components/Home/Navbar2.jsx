import { HamburgerIcon } from "@chakra-ui/icons";
import { HStack } from "@chakra-ui/layout";
import {
  Button,
  Image,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar2 = () => {
  return (
    <HStack
      h="70px"
      display={{ base: "flex", md: "none" }}
      alignItems="center"
      justifyContent="space-between"
      px="4"
    >
      <Image h="50px" src="https://tmetric.com/images/tmetric_logo_with_text.svg" alt="logo1" />
      <Menu>
        <MenuButton
          as={Button}
          variant={"ghost"}
          borderRadius={"none"}
          colorScheme={"blue"}
          fontSize={"xl"}
        >
          <HamburgerIcon />
        </MenuButton>
        <MenuList mt={-2}>
          <MenuGroup>
            <MenuItem>
              <Link to="/">Why Tmetric?</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/">Apps & Integrations</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/">Price</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/">Support</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/blog">Blog</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/login">Login</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/signup">Signup</Link>
            </MenuItem>
            <MenuDivider />
          </MenuGroup>
        </MenuList>
      </Menu>
    </HStack>
  );
};

export default Navbar2;
