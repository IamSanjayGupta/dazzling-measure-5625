import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Avatar,
  Box,
  Button,
  Divider,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Tooltip,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { AddIcon, CheckIcon, SearchIcon } from "@chakra-ui/icons";
import { FiPlay } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbArrowBarToRight } from "react-icons/tb";
import { BsCheckCircle, BsShare } from "react-icons/bs";
import React from "react";
import SearchFilterButton from "./SearchFilterButton";
import { filterBtn } from "../../utils/filterBtn";
import NewTask from "./NewTask";

const TaskContainer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure(true);
  return (
    <Box width="100%" border="1px solid #C1C1C1" rounded="md" p="4">
      <HStack justifyContent="space-between">
        <HStack>
          <Button leftIcon={<AddIcon />} size="sm" colorScheme="blue" variant="solid" px="4">
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
        {isOpen ? <NewTask onClose={onClose} /> : ""}
      </HStack>
    </Box>
  );
};

export default TaskContainer;
