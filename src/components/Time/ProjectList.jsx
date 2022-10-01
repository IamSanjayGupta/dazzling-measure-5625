import { Box, Checkbox, Flex, Text } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { FaPlay, FaStop } from "react-icons/fa";
import { FcFolder } from "react-icons/fc";
import { MdOutlineDeleteOutline } from "react-icons/md";

const ProjectList = ({
  props,
  setPlay,
  play,
  DeleteProject,
  value,
  value1,
}) => {
  const [active, setActive] = useState(false);
  console.log(value1);

  const [count, setCount] = useState(0);
  const [is, setIs] = useState(false);
  const timerId = useRef(null);
  const Start = () => {
    setActive(true);
    setIs(true);
    setPlay(play + 1);
    if (!timerId.current) {
      timerId.current = setInterval(() => {
        setCount((count) => count + 1);
      }, 60000);
    }
  };
  const Pause = () => {
    setActive(false);
    setPlay(play - 1);
    setIs(false);
    clearTimeout(timerId.current);
    timerId.current = null;
  };

  return (
    <Box key={props.id}>
      <Flex
        border={"1px  solid #d0d6db"}
        p={"1rem"}
        justifyContent="space-between"
      >
        <Flex gap="20px">
          <Checkbox></Checkbox>
          <Text>{props.description}</Text>
        </Flex>
        <Flex gap="30px">
          <Flex gap="10px">
            {" "}
            <FcFolder size="1.5rem" />
            <Text>{props.project}</Text>
          </Flex>
          <Flex>
            {value}am - {value1}am{" "}
          </Flex>
          {active ? <Text color="green">Active</Text> : ""}

          <Text>{count} : min</Text>
          {!is ? (
            <Box mt="5px">
              <FaPlay color="gray" onClick={Start} />
            </Box>
          ) : (
            <Box mt="5px">
              <FaStop color="red" onClick={Pause} />
            </Box>
          )}
          <Text mt="2px" ml="1PX" cursor={"pointer"}>
            <MdOutlineDeleteOutline
              onClick={() => DeleteProject(props.id)}
              size={"20px"}
            />
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ProjectList;
