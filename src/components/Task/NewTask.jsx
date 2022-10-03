import React, { useEffect, useState } from "react";
import { CheckIcon } from "@chakra-ui/icons";
import { FaPause, FaPlay } from "react-icons/fa";
import { RiDeleteBin6Line, RiPagesLine } from "react-icons/ri";
import { TbArrowBarToRight } from "react-icons/tb";
import { BsFillPencilFill, BsShare } from "react-icons/bs";
import { BiBarChart } from "react-icons/bi";
import { Divider, Heading, HStack, Link, Text, VStack } from "@chakra-ui/layout";
import {
  Button,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Textarea,
} from "@chakra-ui/react";
import { getActivity } from "../../utils/getActivity";
import { useDispatch, useSelector } from "react-redux";
import { deleteTaskAPI, updateTaskAPI } from "../../redux/task/task.action";
import { cleanup } from "@testing-library/react";
let timerid = 0;
const NewTask = ({ onClose }) => {
  const { selectTask } = useSelector((state) => state.task);
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState(selectTask);

  useEffect(() => {
    setNewTask({ ...selectTask });
  }, [selectTask]);

  const handleInput = (e) => {
    let { type, name, value } = e.target;

    if (name === "startTaskBtn") {
      let newStatus = newTask.status === "Running" ? "Mark Completed" : "Running";
      setNewTask({
        ...newTask,
        status: newStatus,
        start_date: newTask.start_date ? newTask.start_date : Date.now(),
      });
    } else if (name === "markBtn") {
      let newStatus = newTask.status === "Completed" ? "Mark Completed" : "Completed";
      setNewTask({ ...newTask, status: newStatus });
    } else if (name === "project" || name === "assignee" || name === "due_date" || name === "tag") {
      setNewTask({
        ...newTask,
        [name]: value,
        activity: [
          ...newTask.activity,
          {
            id: Date.now(),
            by: "",
            message: getActivity(name, value),
            date_time: new Date().toLocaleString(),
          },
        ],
      });
    } else {
      setNewTask({ ...newTask, [name]: value });
    }
  };

  const handleDelete = () => {
    dispatch(deleteTaskAPI(newTask.id));
    onClose();
  };

  useEffect(() => {
    timerid && clearTimeout(timerid);
    timerid = setTimeout(() => {
      dispatch(updateTaskAPI(newTask.id, newTask));
    }, 1000);
  }, [newTask]);

  return (
    <form style={{ width: "100%" }}>
      <VStack
        height={"60vh"}
        w="100%"
        overflowY="auto"
        border="1px solid #C1C1C1"
        rounded="md"
        p="3"
        alignItems="flex-start"
      >
        <HStack w="100%" justifyContent="space-between">
          <HStack>
            <IconButton
              variant="outline"
              rounded="full"
              icon={
                newTask.status === "Running" ? <FaPause fill="red" /> : <FaPlay fill="#17c22e" />
              }
              name="startTaskBtn"
              onClick={handleInput}
            />
            <Button
              colorScheme={newTask.status === "Completed" ? "whatsapp" : "gray"}
              leftIcon={<CheckIcon />}
              name="markBtn"
              size="sm"
              onClick={handleInput}
            >
              {newTask.status === "Completed" ? "Completed" : "Mark Complete"}
            </Button>
          </HStack>
          <HStack>
            <IconButton variant="ghost" rounded="full" icon={<BsShare />} />
            <IconButton
              variant="ghost"
              rounded="full"
              icon={<RiDeleteBin6Line />}
              onClick={handleDelete}
            />
            <IconButton
              variant="ghost"
              rounded="full"
              icon={<TbArrowBarToRight />}
              onClick={onClose}
            />
          </HStack>
        </HStack>
        <InputGroup w="200px" transition="all 0.4s" _focusWithin={{ width: "100%" }}>
          <Input
            name="title"
            value={newTask.title}
            placeholder="Enter Task Name"
            border="none"
            onChange={handleInput}
          />
          <InputRightElement children={<BsFillPencilFill color="green.500" />} />
        </InputGroup>
        <HStack w="250px" transition="all 0.4s" _focusWithin={{ width: "100%" }}>
          <Text size="md" color="gray.400" mr="3">
            Project
          </Text>
          <Select
            placeholder="Select option"
            name="project"
            value={newTask.project}
            border="none"
            size="sm"
            rounded="md"
            onChange={handleInput}
          >
            <option value="Project Z">Project Z</option>
            <option value="Project X">Project X</option>
            <option value="Project Y">Project Y</option>
          </Select>
        </HStack>
        <HStack w="250px" transition="all 0.4s" _focusWithin={{ width: "100%" }}>
          <Text size="md" color="gray.400">
            Assignee
          </Text>
          <Select
            name="assignee"
            placeholder="Select option"
            value={newTask.assignee}
            border="none"
            size="sm"
            rounded="md"
            onChange={handleInput}
          >
            <option value="Sanjay">Sanjay</option>
            <option value="Vaibhav">Vaibhav</option>
            <option value="Summaiya">Summaiya</option>
            <option value="Venketesh">Venketesh</option>
          </Select>
        </HStack>
        <InputGroup w="250px">
          <Text size="md" color="gray.400" w="50%" mt="1">
            Due Date
          </Text>
          <Input
            name="due_date"
            value={newTask.due_date}
            type="date"
            border="none"
            size="sm"
            rounded="md"
            onChange={handleInput}
          />
          <InputRightElement children={<BsFillPencilFill />} />
        </InputGroup>
        <Divider />
        <InputGroup>
          <IconButton variant="none" icon={<RiPagesLine fill="gray.400" />} border="none" />
          <Textarea
            name="description"
            value={newTask.description}
            placeholder="Enter Task Description"
            border="none"
            rows="2"
            onChange={handleInput}
          />
          <InputRightElement children={<BsFillPencilFill color="green.500" />} />
        </InputGroup>
        <Divider />
        <InputGroup w="250px">
          <Text size="md" color="gray.400" w="50%" mt="1">
            Estimate
          </Text>
          <Input
            name="estimate"
            value={newTask.estimate}
            type="number"
            placeholder="In Minutes"
            border="none"
            size="sm"
            rounded="md"
            onChange={handleInput}
          />
          <InputRightElement children={<BsFillPencilFill color="green.500" />} />
        </InputGroup>
        <HStack w="250px" transition="all 0.4s" _focusWithin={{ width: "100%" }}>
          <Text size="md" color="gray.400" mr="4">
            Tag
          </Text>
          <Select
            name="tag"
            placeholder="Select Tag"
            value={newTask.tag}
            border="none"
            size="sm"
            rounded="md"
            onChange={handleInput}
          >
            <option value="Design">Design</option>
            <option value="Development">Development</option>
            <option value="Testing">Testing</option>
          </Select>
        </HStack>
        <InputGroup>
          <IconButton variant="none" icon={<BiBarChart color="red.500" />} border="none" />
          <Text size="md" color="gray.400" w="50%" mt="2">
            Activity
          </Text>
        </InputGroup>
        <VStack pl="8" alignItems="flex-start">
          {newTask.activity
            .sort((a, b) => b.id - a.id)
            ?.map((act) => {
              return (
                <Text fontSize="sm" key={act.id}>
                  {act.by} {act.message} -{" "}
                  <span style={{ fontSize: "0.8rem" }}>{act.date_time}</span>
                </Text>
              );
            })}
        </VStack>
      </VStack>
    </form>
  );
};

export default NewTask;
