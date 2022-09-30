import React, { useState } from "react";
import { CheckIcon } from "@chakra-ui/icons";
import { FaPlay } from "react-icons/fa";
import { RiDeleteBin6Line, RiPagesLine } from "react-icons/ri";
import { TbArrowBarToRight } from "react-icons/tb";
import { BsFillPencilFill, BsShare } from "react-icons/bs";
import { BiBarChart } from "react-icons/bi";
import { Divider, Heading, HStack, Text, VStack } from "@chakra-ui/layout";
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

const NewTask = ({ task, onClose }) => {
  const [newTask, setNewTask] = useState(task);
  console.log(newTask);
  const handleInput = (e) => {
    let { type, name, value } = e.target;
    console.log(type, name, value, "ene");

    if (
      name === "project" ||
      name === "assignee" ||
      name === "due_date" ||
      name === "tag" ||
      name === "estimate"
    ) {
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

  return (
    <form style={{ width: "100%" }}>
      <VStack
        height={"370px"}
        w="100%"
        overflowY="scroll"
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
                newTask.status === "Running" ? <FaPlay fill="#17c22e" /> : <FaPlay fill="#C1C1C1" />
              }
              onClick={handleInput}
            />
            <Button colorScheme="gray" leftIcon={<CheckIcon />} size="sm" onClick={handleInput}>
              {newTask.status === "Completed" ? "Completed" : "Mark Complete"}
            </Button>
          </HStack>
          <HStack>
            <IconButton variant="ghost" rounded="full" icon={<BsShare />} />
            <IconButton variant="ghost" rounded="full" icon={<RiDeleteBin6Line />} />
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
            Value={newTask.project}
            border="none"
            size="sm"
            rounded="md"
            onChange={handleInput}
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
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
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
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
            <option value="option1">Designe</option>
            <option value="option2">Development</option>
            <option value="option3">Testing</option>
          </Select>
        </HStack>
        <InputGroup>
          <IconButton variant="none" icon={<BiBarChart color="red.500" />} border="none" />
          <Text size="md" color="gray.400" w="50%" mt="2">
            Activity
          </Text>
        </InputGroup>
        <VStack pl="8">
          {newTask.activity.map((act) => {
            return (
              <Text fontSize="sm" key={act.id}>
                {act.by} {act.message} - {act.date_time}
              </Text>
            );
          })}
        </VStack>
      </VStack>
    </form>
  );
};

export default NewTask;
