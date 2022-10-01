import { Heading, HStack, Text, VStack } from "@chakra-ui/layout";
import { Icon, Image } from "@chakra-ui/react";
import React from "react";
import { BsAlarm, BsAlarmFill } from "react-icons/bs";
import logo from "../../assets/Logo/logo_and_text.svg";

const SideMenu = () => {
  return (
    <VStack h="100vh" w="20%" bg="gray.50" py="4">
      <Image src={logo} />
    </VStack>
  );
};

export default SideMenu;
