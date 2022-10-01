import { HStack } from "@chakra-ui/layout";
import { IconButton, Image, useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import { BsChevronLeft, BsTextIndentLeft } from "react-icons/bs";
import PageNotFound from "./PageNotFound";
import SideMenu from "./SideMenu/SideMenu";
import Task from "./Task/Task";

const MainApp = () => {
  const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: true });
  const [option, setOption] = useState("Task");
  return (
    <>
      <IconButton
        variant="outline"
        shadow="lg"
        size="sm"
        icon={isOpen ? <BsChevronLeft /> : <BsTextIndentLeft />}
        pos="absolute"
        top="4"
        left="2"
        fontSize="20"
        onClick={isOpen ? onClose : onOpen}
      />

      <HStack alignItems="flex-start" justifyContent="center">
        {isOpen ? <SideMenu setOption={setOption} /> : ""}
        {option === "Task" ? <Task /> : <PageNotFound />}
      </HStack>
    </>
  );
};

export default MainApp;
