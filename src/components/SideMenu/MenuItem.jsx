import { HStack, Text } from "@chakra-ui/layout";
import { Icon } from "@chakra-ui/react";
import React from "react";

const MenuItem = ({ text, icon }) => {
  return (
    <HStack border="1px solid red" w="100%" p="1" pl="4" gap="1" color="gray.600">
      <Icon as={icon} w={6} h={6} />
      <Text>{text}</Text>
    </HStack>
  );
};

export default MenuItem;
