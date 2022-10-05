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
              <Link style={{ width: "100%" }} to="/">
                Why Tmetric?
              </Link>
            </MenuItem>
            <MenuItem>
              <Link style={{ width: "100%" }} to="/">
                Apps & Integrations
              </Link>
            </MenuItem>
            <MenuItem>
              <Link style={{ width: "100%" }} to="/">
                Price
              </Link>
            </MenuItem>
            <MenuItem>
              <Link style={{ width: "100%" }} to="/">
                Support
              </Link>
            </MenuItem>
            <MenuItem>
              <Link style={{ width: "100%" }} to="/blog">
                Blog
              </Link>
            </MenuItem>
            <MenuItem>
              <Link style={{ width: "100%" }} to="/login">
                Login
              </Link>
            </MenuItem>
            <MenuItem>
              <Link style={{ width: "100%" }} to="/signup">
                Signup
              </Link>
            </MenuItem>
            <MenuDivider />
          </MenuGroup>
        </MenuList>
      </Menu>
    </HStack>
  );
};

export default Navbar2;
