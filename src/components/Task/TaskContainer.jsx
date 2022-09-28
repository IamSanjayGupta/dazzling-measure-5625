import { Box, Button, HStack, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { AddIcon, SearchIcon } from "@chakra-ui/icons";
import React from "react";
import SearchFilterButton from "./SearchFilterButton";
import { filterBtn } from "../../utils/filterBtn";

const TaskContainer = () => {
  return (
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
  );
};

export default TaskContainer;
