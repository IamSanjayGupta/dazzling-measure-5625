import React from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Avatar,
  IconButton,
  Tooltip,
  HStack,
  Box,
  Input,
} from "@chakra-ui/react";
import { FiPlay } from "react-icons/fi";
import { BsCheckCircle } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { TASK_SET_SELECTED_TASK } from "../../redux/TASK/task.types";
const TaskList = ({ onOpen, taskList }) => {
  const dispatch = useDispatch();
  console.log(taskList);
  const handleTaskClick = (task) => {
    dispatch({ type: TASK_SET_SELECTED_TASK, payload: task });
    onOpen();
  };
  return (
    <Accordion allowToggle w="100%">
      {taskList?.map((el) => {
        return (
          <AccordionItem key={el[0]}>
            <AccordionButton>
              <AccordionIcon />
              <Box ml="2">{el[0] == "" ? "No Project" : el[0]}</Box>
            </AccordionButton>
            <AccordionPanel p="0">
              {el[1].map((t) => {
                return (
                  <HStack
                    key={t.id}
                    size="md"
                    gap="2"
                    px="3"
                    _hover={{ bg: "gray.100" }}
                    _active={{ bg: "gray.100" }}
                    onClick={() => handleTaskClick(t)}
                  >
                    <IconButton
                      colorScheme="gray"
                      variant="outline"
                      rounded="xl"
                      border="none"
                      icon={<BsCheckCircle />}
                    />
                    <Input
                      type="text"
                      defaultValue={t?.title}
                      border="none"
                      size="sm"
                      _focus={{ bgColor: "white" }}
                    />
                    <HStack>
                      <Tooltip label="Sanjay" aria-label="A tooltip">
                        <Avatar size="xs" name="Sanjay" src="https://bit.ly/dan-abramov" />
                      </Tooltip>
                      <IconButton
                        colorScheme="gray"
                        variant="outline"
                        rounded="xl"
                        border="none"
                        icon={<FiPlay />}
                      />
                    </HStack>
                  </HStack>
                );
              })}
            </AccordionPanel>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default TaskList;
