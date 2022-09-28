import {
  Box,
  Button,
  Center,
  Divider,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import SearchFilterButton from "./SearchFilterButton";

import { filterBtn } from "../../utils/filterBtn";
import { AddIcon, SearchIcon } from "@chakra-ui/icons";

const Task = () => {
  return (
    <VStack alignItems={"flex-start"} p="5">
      <HStack>
        <Heading>My Task</Heading>
        <Center height="50px">
          <Divider orientation="vertical" w="5px" />
        </Center>
        <SearchFilterButton {...filterBtn[5]} title={"Select Assignee"} />
      </HStack>
      <HStack>
        {filterBtn.map((btn) => (
          <SearchFilterButton key={btn.title} {...btn} />
        ))}
      </HStack>
      <Box width="100%" border="1px solid #C1C1C1" rounded="md" p="4">
        <HStack justifyContent="space-between">
          <HStack>
            <Button leftIcon={<AddIcon />} size="sm" colorScheme="blue" variant="solid" px="4">
              New Task
            </Button>
            <SearchFilterButton {...filterBtn[5]} title={"Sort"} />
          </HStack>
          <InputGroup size="sm" maxW="150px">
            <InputLeftElement children={<SearchIcon color="gray.400" />} />
            <Input type="search" placeholder="Search" rounded="md" />
          </InputGroup>
        </HStack>
      </Box>
    </VStack>
  );
};

export default Task;
