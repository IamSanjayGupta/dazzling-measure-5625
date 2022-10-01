import { HStack, Text } from "@chakra-ui/layout";
import { Icon } from "@chakra-ui/react";
import React from "react";

const MenuItem = ({ name, icon }) => {
  return (
    <HStack w="100%" p="1" pl="6" gap="1" color="gray.600" _hover={{ bg: "gray.200" }}>
      <Icon as={icon} w={5} h={6} />
      <Text fontSize={"0.95rem"} color="gray.800">
        {name}
      </Text>
    </HStack>
  );
};

export default MenuItem;
