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
//import {ChevronDownIcon} from "react-icons"
import { BiChevronDown } from "react-icons/bi";
//import { BsGlobe2 } from 'react-icons/bs'
import { Link } from "react-router-dom";
import { FaGlobe } from "react-icons/fa";
//import { useNavigate } from 'react-router-dom'
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
      justifyContent="space-around"
      alignItems={"center"}
      bg="#fff0b8"
      color="white"
      position="fixed"
      zIndex={10}
      top={0}
      className={color ? "navbar navbar-bg" : "navbar"}
    >
      <HStack>
        <Box cursor={"pointer"} p={0}>
          <Image
            w="500px"
            height={75}
            src="https://tmetric.com/images/tmetric_logo_with_text.svg"
            alt="logo1"
          />
        </Box>

        <Button
          color="black"
          bg="#fff0b8"
          cursor={"pointer"}
          w="130px"
          border={"1px solid grey"}
          borderRadius={10}
          fontSize={17}
          leftIcon={<FaGlobe />}
        >
          EN
        </Button>
      </HStack>

      <HStack>
        {/* <Box  as='button'  color='black' px={0}  w={150} fontSize={"17px"} border="none" cursor={"pointer"} display={"flex"} alignItems={"center"}>
               Why TMetric <BiChevronDown />
            </Box> */}

        <Box cursor={"pointer"} w={"200px"}>
          <Text color={"black"} w={"200px"}>
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
                w={1520}
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

        {/* <Box as='button'  color='black' px={0} w={200} h={"50px"} fontSize={"17px"}  border="none" cursor={"pointer"} display={"flex"} alignItems={"center"}>
              Apps & Integrations <BiChevronDown />
            </Box> */}

        <Text color={"black"} w={200}>
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
              w={1520}
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
            px={6}
            h={"50px"}
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
            px={6}
            h={"50px"}
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
            px={6}
            h={"50px"}
            fontSize={"17px"}
            border="none"
            cursor={"pointer"}
            _hover={{ color: "blue" }}
          >
            Blog
          </Box>
        </Link>
      </HStack>

      <HStack>
        <Link to="/login">
          <Box
            as="button"
            color="black"
            w={100}
            h={"50px"}
            fontSize={"17px"}
            border="none"
            cursor={"pointer"}
            _hover={{ color: "blue" }}
          >
            Log In
          </Box>
        </Link>
        <Link to="/signup">
          <Box
            as="button"
            w="110px"
            color="blue"
            mr={10}
            px={0}
            h={"50px"}
            fontSize={"17px"}
            border={"1px solid blue"}
            borderRadius={"5px"}
            cursor={"pointer"}
            _hover={{ bg: "blue", color: " white" }}
          >
            Sign Up
          </Box>
        </Link>
      </HStack>
    </Flex>
  );
};

export default Navbar;
