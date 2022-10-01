import { HStack } from "@chakra-ui/layout";
import React from "react";
import SideMenu from "./SideMenu/SideMenu";
import Task from "./Task/Task";

const MainApp = () => {
  return (
    <HStack alignItems="flex-start">
      <SideMenu />
      <Task />
    </HStack>
  );
};

export default MainApp;
