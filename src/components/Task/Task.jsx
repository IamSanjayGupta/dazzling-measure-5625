import { HStack, VStack } from "@chakra-ui/react";
import React from "react";
import SearchFilterButton from "./SearchFilterButton";

import { filterBtn } from "../../utils/filterBtn";

const Task = () => {
  console.log(filterBtn);
  return (
    <VStack>
      <HStack>
        {filterBtn.map((btn) => (
          <SearchFilterButton key={btn.title} {...btn} />
        ))}
      </HStack>
    </VStack>
  );
};

export default Task;
