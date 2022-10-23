import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { TASK_SET_SELECTED_TASK } from "../../redux/task/task.types";
import { FaPause } from "react-icons/fa";

const TaskList = ({ onOpen, list }) => {
  const dispatch = useDispatch();
  const handleTaskClick = (task) => {
    if (!task._id) return;
    dispatch({ type: TASK_SET_SELECTED_TASK, payload: task });
    onOpen();
  };
  return (
    <Accordion allowToggle w="100%">
      {list?.map((el) => {
        return (
          <AccordionItem key={el[0]}>
            <AccordionButton>
              <AccordionIcon />
              <Box ml="2">{el[0] == "" ? "Unknown" : el[0]}</Box>
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
                      icon={
                        t.status === "Completed" ? (
                          <BsCheckCircle fill="#17c22e" />
                        ) : (
                          <BsCheckCircle />
                        )
                      }
                    />
                    <Input
                      readOnly
                      type="text"
                      value={t?.title}
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
                        icon={t.status === "Running" ? <FaPause fill="red" /> : <FiPlay />}
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
