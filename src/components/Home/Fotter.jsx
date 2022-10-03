import { Box, Flex, HStack, List, ListItem, Text, Wrap, WrapItem } from "@chakra-ui/layout";
import { Avatar, Image } from "@chakra-ui/react";
import React from "react";
import {
  AiOutlineDesktop,
  AiFillApple,
  AiFillAndroid,
  AiFillChrome,
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { FaFirefox, FaOpera, FaEdgeLegacy, FaSafari } from "react-icons/fa";
function Fotter() {
  return (
    <div>
      <Box p={20} bg={"#E2E7EB"} display={"flex"} justifyContent={"center"}>
        {/* <HStack spacing='24px'> */}

        <Box w="300px" p={5}>
          <Image
            w="400px"
            height={65}
            src="https://tmetric.com/images/tmetric_logo_with_text.svg"
            alt="logo1"
          />
        </Box>

        <Box w="250px">
          <Text>
            <b>Applications</b>
          </Text>
          <Flex gap={5} mt={5} alignItems={"center"}>
            <AiOutlineDesktop size={25} />
            <Text fontSize={18}>Desktop</Text>
          </Flex>
          <Flex gap={5} mt={2} alignItems={"center"}>
            <AiFillApple size={25} />
            <Text fontSize={18}>iOS</Text>
          </Flex>
          <Flex gap={5} mt={2} alignItems={"center"}>
            <AiFillAndroid size={25} />
            <Text fontSize={18}>Android</Text>
          </Flex>
        </Box>

        <Box w="250px">
          <Text>
            <b>Browser Extensions</b>
          </Text>
          <Flex gap={5} mt={5} alignItems={"center"}>
            <AiFillChrome size={25} />
            <Text fontSize={18}>Chrome</Text>
          </Flex>
          <Flex gap={5} mt={2} alignItems={"center"}>
            <FaFirefox size={25} />
            <Text fontSize={18}>Firefox</Text>
          </Flex>
          <Flex gap={5} mt={2} alignItems={"center"}>
            <FaOpera size={25} />
            <Text fontSize={18}>Opera</Text>
          </Flex>
          <Flex gap={5} mt={2} alignItems={"center"}>
            <FaEdgeLegacy size={25} />
            <Text fontSize={18}>Edge</Text>
          </Flex>
          <Flex gap={5} mt={2} alignItems={"center"}>
            <FaSafari size={25} />
            <Text fontSize={18}>Safari</Text>
          </Flex>
        </Box>

        <Box w="250px">
          <Text>
            <b>Resources</b>
          </Text>
          <Text mt={5} fontSize={18}>
            Solutions
          </Text>
          <Text mt={2} fontSize={18}>
            Integrations
          </Text>
          <Text mt={2} fontSize={18}>
            Help
          </Text>
          <Text mt={2} fontSize={18}>
            Time Trackers Comparison
          </Text>
          <Text mt={2} fontSize={18}>
            Blog
          </Text>
        </Box>

        <Box w="250px">
          <Text>
            <b>About</b>
          </Text>
          <Text mt={5} fontSize={18}>
            About TMetric
          </Text>
          <Text mt={2} fontSize={18}>
            Terms of Service
          </Text>
          <Text mt={2} fontSize={18}>
            Privacy Policy
          </Text>
          <Text mt={2} fontSize={18}>
            Cookies Policy
          </Text>
        </Box>
        {/* </HStack> */}
      </Box>

      <Box p={5} bg={"#E2E7EB"}>
        <Flex justifyContent={"space-around"}>
          <Text>Copyright © Devart 2022</Text>
          <HStack>
            <AiFillFacebook size={25} />
            <AiFillTwitterCircle size={25} />
            <AiFillLinkedin size={25} />
            <AiFillYoutube size={25} />
          </HStack>
        </Flex>
      </Box>
    </div>
  );
}

export default Fotter;
