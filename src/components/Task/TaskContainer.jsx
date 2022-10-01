import {
  HStack,
  Box,
  Button,
  Divider,
  Input,
  InputGroup,
  InputLeftElement,
  useDisclosure,
} from "@chakra-ui/react";
import { AddIcon, SearchIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import SearchFilterButton from "./SearchFilterButton";
import { filterBtn } from "../../utils/filterBtn";
import NewTask from "./NewTask";
import TaskList from "./TaskList";
import { useDispatch } from "react-redux";
import { addTaskAPI } from "../../redux/task/task.action";
const initTask = {
  id: "",
  title: "",
  status: "InComplete",
  project: "",
  assignee: "",
  start_date: "",
  due_date: "",
  description: "",
  estimate: "",
  tag: "",
  activity: [
    {
      id: Date.now(),
      by: "",
      message: "Task created",
      date_time: new Date().toLocaleString(),
    },
  ],
};

const TaskContainer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure(true);

  const [sortBy, setSortBy] = useState("project");
  const dispatch = useDispatch();

  const addTask = () => dispatch(addTaskAPI(initTask));

  return (
    <Box width="100%" height="78vh" border="1px solid #C1C1C1" rounded="md" p="4">
      <HStack justifyContent="space-between">
        <HStack>
          <Button
            leftIcon={<AddIcon />}
            size="sm"
            colorScheme="blue"
            variant="solid"
            px="4"
            onClick={addTask}
          >
            New Task
          </Button>
          <SearchFilterButton {...filterBtn[5]} title={"Sort"} />
        </HStack>
        <InputGroup size="sm" maxW="180px">
          <InputLeftElement children={<SearchIcon color="gray.400" />} />
          <Input type="search" placeholder="Search" rounded="md" />
        </InputGroup>
      </HStack>
      <Divider my="4" />
      <HStack alignItems="flex-start">
        <TaskList onOpen={onOpen} />
        {isOpen ? <NewTask onClose={onClose} /> : ""}
      </HStack>
    </Box>
  );
};

export default TaskContainer;
