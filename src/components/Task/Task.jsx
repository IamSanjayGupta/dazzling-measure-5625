import { Center, Divider, Heading, HStack, VStack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import SearchFilterButton from "./SearchFilterButton";
import { filterBtn } from "../../utils/filterBtn";
import TaskContainer from "./TaskContainer";

const Task = () => {
  useEffect(() => {
    document.title = "Task";
  }, []);

  return (
    <>
      <VStack alignItems={"flex-start"} p="3" w="95%" height="100vh" overflow="hidden">
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
        <TaskContainer />
      </VStack>
    </>
  );
};

export default Task;
