import { Box, Checkbox, Flex, Text } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { FaPlay, FaStop } from "react-icons/fa";
import { FcFolder } from "react-icons/fc";
import { MdOutlineDeleteOutline } from "react-icons/md";

const ProjectList = ({ props, setPlay, play, DeleteProject }) => {
  console.log(props);

  return <Box key={props.id}> Project & status</Box>;
};

export default ProjectList;
