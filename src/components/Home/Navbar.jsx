import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";
import { Link } from "react-router-dom";
import { FaGlobe } from "react-icons/fa";
import Droplist from "./DropList1";
import Droplist2 from "./DropList2";

const Navbar = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <Flex
      alignItems={"center"}
      bg="#fff0b8"
      color="white"
      position="fixed"
      zIndex={10}
      top={0}
      className={color ? "navbar navbar-bg" : "navbar"}
      w="100%"
      px="5"
      justifyContent="space-around"
      display={{ base: "none", md: "flex" }}
    >
      <HStack w="20%" justifyContent={"space-around"}>
        <Image
          width={"60%"}
          src="https://tmetric.com/images/tmetric_logo_with_text.svg"
          alt="logo1"
        />

        <Button
          px="4"
          color="black"
          bg="#fff0b8"
          cursor={"pointer"}
          border={"1px solid grey"}
          borderRadius="lg"
          leftIcon={<FaGlobe />}
        >
          EN
        </Button>
      </HStack>

      <HStack w="50%" justifyContent={"space-around"}>
        <Box cursor={"pointer"}>
          <Text color={"black"}>
            <Popover trigger={"hover"} placement={"bottom-start"}>
              <PopoverTrigger>
                <Flex alignItems={"center"} justifyContent={"center"}>
                  <Text
                    fontSize={"17px"}
                    p={0}
                    fontWeight={500}
                    color={linkColor}
                    _hover={{ color: "blue" }}
                  >
                    Why TMetric
                  </Text>
                  <BiChevronDown />
                </Flex>
              </PopoverTrigger>
              <PopoverContent
                border={0}
                w={"100vw"}
                padding="50px"
                TextShadow={"xl"}
                bg={popoverContentBgColor}
                p={2}
                rounded={"xl"}
              >
                <Droplist />
              </PopoverContent>
            </Popover>
          </Text>
        </Box>

        <Text color={"black"}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Flex alignItems={"center"} justifyContent={"center"}>
                <Text
                  fontSize={"17px"}
                  p={0}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{ color: "blue" }}
                >
                  Apps & Integrations
                </Text>
                <BiChevronDown />
              </Flex>
            </PopoverTrigger>
            <PopoverContent
              border={0}
              w={"100vw"}
              padding="50px"
              TextShadow={"xl"}
              bg={popoverContentBgColor}
              p={0}
              rounded={"xl"}
            >
              <Droplist2 />
            </PopoverContent>
          </Popover>
        </Text>

        <Link to="/price">
          <Box
            as="button"
            color="black"
            fontSize={"17px"}
            border="none"
            cursor={"pointer"}
            _hover={{ color: "blue" }}
          >
            Pricing
          </Box>
        </Link>
        <Link to="/support">
          <Box
            as="button"
            color="black"
            fontSize={"17px"}
            border="none"
            cursor={"pointer"}
            _hover={{ color: "blue" }}
          >
            Support
          </Box>
        </Link>
        <Link to="/blog">
          <Box
            as="button"
            color="black"
            fontSize={"17px"}
            border="none"
            cursor={"pointer"}
            _hover={{ color: "blue" }}
          >
            Blog
          </Box>
        </Link>
      </HStack>

      <HStack w="20%" justifyContent={"center"} gap="5">
        <Link to="/login">
          <Box
            as="button"
            color="black"
            fontSize={"17px"}
            border="none"
            cursor={"pointer"}
            _hover={{ color: "blue" }}
          >
            Log In
          </Box>
        </Link>
        <Link to="/signup">
          <Button
            fontSize={"17px"}
            bg={"blue"}
            border={"1px solid blue"}
            borderRadius={"md"}
            cursor={"pointer"}
            _hover={{ bg: "blue", color: " white" }}
          >
            Sign Up
          </Button>
        </Link>
      </HStack>
    </Flex>
  );
};

export default Navbar;
