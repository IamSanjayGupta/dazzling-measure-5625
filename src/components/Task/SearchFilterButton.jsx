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
  const [options, setOptions] = useState(childs);
  const handleInput = (e) => {};
  return (
    <div>
      <Menu closeOnSelect={type == "radio"}>
        <MenuButton
          px={2}
          borderRadius="md"
          borderWidth="1px"
          _hover={{ bg: "gray.200" }}
          _expanded={{ bg: "gray.200" }}
          as={Button}
          rightIcon={<ChevronDownIcon />}
          bg="none"
        >
          <span style={{ color: "gray", padding: "0" }}>{title}: </span> ALL
        </MenuButton>
        <MenuList minW="300px">
          <FormControl p="2">
            <Input type="search" size="sm" rounded="md" onChange={handleInput} />
          </FormControl>
          <MenuOptionGroup title="Active" type={type} onChange={(e) => console.log(e)}>
            {options.map((item) => {
              return (
                <MenuItemOption key={item.key} value={item.key}>
                  {item.name}
                </MenuItemOption>
              );
            })}
          </MenuOptionGroup>
        </MenuList>
      </Menu>
    </div>
  );
};

export default SearchFilterButton;
