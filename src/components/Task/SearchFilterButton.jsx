import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Checkbox,
  FormControl,
  Input,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";

const SearchFilterButton = ({ title, type, childs }) => {
  const [selected, setSelected] = useState("Tag");
  return (
    <Menu closeOnSelect={false}>
      <MenuButton
        px={2}
        transition="all 0.2s"
        borderRadius="md"
        borderWidth="1px"
        _hover={{ bg: "gray.200" }}
        _expanded={{ bg: "gray.200" }}
        as={Button}
        rightIcon={<ChevronDownIcon />}
        bg="none"
      >
        <span style={{ color: "gray" }}>{title}: </span> ALL
      </MenuButton>
      <MenuList minW="300px">
        <FormControl p="2">
          <Input type="search" size="sm" rounded="md" />
        </FormControl>
        <MenuOptionGroup title="Country" type={type} onChange={(e) => console.log(e)}>
          <MenuItemOption size="sm" value="email">
            Email
          </MenuItemOption>
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
};

export default SearchFilterButton;
