import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  FormControl,
  Input,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
} from "@chakra-ui/react";
import React, { useState } from "react";

const SearchFilterButton = ({ title, type, childs, handleChange }) => {
  const [options, setOptions] = useState(childs);

  const handleInput = (e) => {
    let newoption = childs.filter((el) => el.name.startsWith(e.target.value));
    setOptions(newoption);
  };
  return (
    <div>
      <Menu closeOnSelect={type === "radio"}>
        <MenuButton
          px={3}
          borderRadius="md"
          borderWidth="1px"
          _hover={{ bg: "gray.200" }}
          _expanded={{ bg: "gray.200" }}
          as={Button}
          rightIcon={<ChevronDownIcon />}
          bg="none"
          h="2rem"
          fontSize={"0.85rem"}
        >
          <span style={{ color: "#616060" }}>{title}: </span>
          <span style={{ color: "#353535" }}>All</span>
        </MenuButton>
        <MenuList minW="300px">
          <FormControl p="2">
            <Input type="search" size="sm" rounded="md" onChange={handleInput} />
          </FormControl>
          <MenuOptionGroup title="Active" type={type} onChange={(e) => handleChange(e)}>
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
