import React from "react";
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

const NewTask = ({ onClose }) => {
  return (
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
          <IconButton variant="outline" rounded="full" icon={<FaPlay fill="#17c22e" />} />
          <Button colorScheme="gray" leftIcon={<CheckIcon />} size="sm">
            Mark Complete
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
        <Input placeholder="Enter Task Name" border="none" />
        <InputRightElement children={<BsFillPencilFill color="green.500" />} />
      </InputGroup>
      <HStack w="250px" transition="all 0.4s" _focusWithin={{ width: "100%" }}>
        <Text size="md" color="gray.400" mr="3">
          Project
        </Text>
        <Select placeholder="Select option" border="none" size="sm" rounded="md">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </HStack>
      <HStack w="250px" transition="all 0.4s" _focusWithin={{ width: "100%" }}>
        <Text size="md" color="gray.400">
          Assignee
        </Text>
        <Select placeholder="Select option" border="none" size="sm" rounded="md">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </HStack>
      <InputGroup w="250px">
        <Text size="md" color="gray.400" w="50%" mt="1">
          Due Date
        </Text>
        <Input type="date" border="none" size="sm" rounded="md" />
        <InputRightElement children={<BsFillPencilFill />} />
      </InputGroup>
      <Divider />
      <InputGroup>
        <IconButton variant="none" icon={<RiPagesLine fill="gray.400" />} border="none" />
        <Textarea placeholder="Here is a placeholder" border="none" rows="2" />
        <InputRightElement children={<BsFillPencilFill color="green.500" />} />
      </InputGroup>
      <Divider />
      <InputGroup w="250px">
        <Text size="md" color="gray.400" w="50%" mt="1">
          Estimate
        </Text>
        <Input type="number" placeholder="In Minutes" border="none" size="sm" rounded="md" />
        <InputRightElement children={<BsFillPencilFill color="green.500" />} />
      </InputGroup>
      <HStack w="250px" transition="all 0.4s" _focusWithin={{ width: "100%" }}>
        <Text size="md" color="gray.400" mr="4">
          Tag
        </Text>
        <Select placeholder="Select Tag" border="none" size="sm" rounded="md">
          <option value="option1">Designe</option>
          <option value="option2">Development</option>
          <option value="option3">Testing</option>
        </Select>
      </HStack>
      <InputGroup>
        <IconButton variant="none" icon={<BiBarChart color="red.500" />} border="none" />
        <Text size="md" color="gray.400" w="50%" mt="1">
          Activity
        </Text>
      </InputGroup>
      <VStack pl="8">
        <Text fontSize="sm">Hello</Text>
        <Text fontSize="sm">Hello</Text>
        <Text fontSize="sm">Hello</Text>
      </VStack>
    </VStack>
  );
};

export default NewTask;
