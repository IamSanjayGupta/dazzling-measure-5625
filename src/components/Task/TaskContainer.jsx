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
import React, { useEffect, useState } from "react";
import SearchFilterButton from "./SearchFilterButton";
import NewTask from "./NewTask";
import TaskList from "./TaskList";
import { useDispatch, useSelector } from "react-redux";
import { addTaskAPI, getTasksAPI } from "../../redux/task/task.action";

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

const sortBtn = {
  title: "Sort",
  type: "radio",
  childs: [
    {
      key: "project",
      name: "Project",
    },
    {
      key: "tag",
      name: "Tag",
    },
    {
      key: "assignee",
      name: "Assignee",
    },
    {
      key: "New first",
      name: "New first",
    },
    {
      key: "Old first",
      name: "Old first",
    },
  ],
};

const TaskContainer = () => {
  const { tasks } = useSelector((state) => state.task);
  const [tasksList, setTasksList] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure(true);
  const [sortBy, setSortBy] = useState("project");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasksAPI());
  }, []);

  useEffect(() => {
    if (!tasks.length) return;
    let newTaskList = {};
    tasks?.forEach((el) => {
      !newTaskList[el[sortBy]]
        ? (newTaskList[el[sortBy]] = [el])
        : (newTaskList[el[sortBy]] = [...newTaskList[el[sortBy]], el]);
    });
    setTasksList(Object.entries(newTaskList));
  }, [tasks, sortBy]);

  const handleChange = (e) => setSortBy(e);

  const addTask = () => dispatch(addTaskAPI({ ...initTask, id: Date.now() }));

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
          <SearchFilterButton {...sortBtn} handleChange={handleChange} />
        </HStack>
        <InputGroup size="sm" maxW="180px">
          <InputLeftElement children={<SearchIcon color="gray.400" />} />
          <Input type="search" placeholder="Search" rounded="md" />
        </InputGroup>
      </HStack>
      <Divider my="4" />
      <HStack alignItems="flex-start">
        <TaskList onOpen={onOpen} list={tasksList} />
        {isOpen ? <NewTask onClose={onClose} /> : ""}
      </HStack>
    </Box>
  );
};

export default TaskContainer;
