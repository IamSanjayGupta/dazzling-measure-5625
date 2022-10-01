import { Box, Divider, Heading, HStack, Text, VStack } from "@chakra-ui/layout";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Image,
} from "@chakra-ui/react";
import React from "react";
import logo from "../../assets/Logo/logo_and_text.svg";

import { topMenu, analyseMenu, manageMenu, workspaceMenu } from "../../utils/sideMenuItems";
import Userprofile from "../Auth/Userprofile";
import MenuItem from "./MenuItem";
const SideMenu = () => {
  return (
    <VStack h="100vh" maxW="230px" w="20%" bg="gray.50" py="4" justifyContent="space-between">
      <VStack w="100%">
        <Image src={logo} />
        <Box w="100%" gap="0" p="0" alignItems="flex-start">
          {topMenu.map((menu) => {
            return <MenuItem key={menu.id} {...menu} />;
          })}
        </Box>
        <Divider />
        <Accordion allowToggle w="100%">
          <AccordionItem border="none">
            <AccordionButton justifyContent="space-between">
              <Text fontSize="xs" pl="3">
                ANALYZE
              </Text>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4} p="0">
              {analyseMenu.map((menu) => {
                return <MenuItem key={menu.id} {...menu} />;
              })}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Accordion allowToggle w="100%">
          <AccordionItem border="none">
            <AccordionButton justifyContent="space-between">
              <Text fontSize="xs" pl="3">
                MANAGE
              </Text>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4} p="0">
              {manageMenu.map((menu) => {
                return <MenuItem key={menu.id} {...menu} />;
              })}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Accordion allowToggle w="100%">
          <AccordionItem border="none">
            <AccordionButton justifyContent="space-between">
              <Text fontSize="xs" pl="3">
                WORKSPACE
              </Text>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4} p="0">
              {workspaceMenu.map((menu) => {
                return <MenuItem key={menu.id} {...menu} />;
              })}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </VStack>
      <Box>
        <Userprofile />
      </Box>
    </VStack>
  );
};

export default SideMenu;
