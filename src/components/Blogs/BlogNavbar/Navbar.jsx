import React from "react";
import { Link } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { Box, HStack } from "@chakra-ui/react";
function Navbar() {
  return (
    <header>
      <HStack
        sx={{
          display: "flex",
          justifyContent: {
            base: "space-evenly",
            sm: "space-evenly",
            md: "space-evenly",
            lg: "space-evenly",
            xl: "space-evenly",
            "2xl": "center",
          },
          gap: "1rem",
        }}
      >
        <Link to="/">
          <Box color="brand.300" fontSize="40px" fontWeight="700"></Box>
        </Link>
        <Link to="/news">
          <Box
            _hover={{ color: "brand.200" }}
            display={{
              base: "none",
              sm: "none",
              md: "none",
              lg: "block",
              xl: "block",
              "2xl": "block",
            }}
          >
            News
          </Box>
        </Link>

        <Link>
          <Box
            _hover={{ color: "brand.200" }}
            display={{
              base: "none",
              sm: "none",
              md: "none",
              lg: "block",
              xl: "block",
              "2xl": "block",
            }}
          >
            Pricing
          </Box>
        </Link>
        <Link to="/search">
          <Box>
            <Search2Icon color="brand.200" />
            {"  "}Search
          </Box>
        </Link>
        <Link to="/signin">
          <Box bg="brand.100" padding="10px 20px" borderRadius="7px">
            Sign in
          </Box>
        </Link>
        <Link to="/signup">
          <Box
            bg="brand.300"
            color="white"
            padding="10px 20px"
            borderRadius="7px"
            display={{
              base: "none",
              sm: "none",
              md: "none",
              lg: "none",
              xl: "block",
              "2xl": "block",
            }}
          >
            Create account
          </Box>
        </Link>
      </HStack>
    </header>
  );
}

export default Navbar;
