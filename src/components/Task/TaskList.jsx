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
const TaskList = ({ onOpen }) => {
  return (
    <Accordion allowToggle w="100%">
      <AccordionItem>
        <AccordionButton>
          <AccordionIcon />
          <Box ml="2">Section 1</Box>
        </AccordionButton>
        <AccordionPanel p="0">
          <HStack
            size="md"
            gap="2"
            px="3"
            _hover={{ bg: "gray.100" }}
            _active={{ bg: "gray.100" }}
            onClick={onOpen}
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
              defaultValue="Learn React"
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
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default TaskList;
