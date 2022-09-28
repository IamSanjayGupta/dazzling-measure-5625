import { HStack } from "@chakra-ui/react";
import React from "react";
import SearchFilterButton from "./SearchFilterButton";

const Task = () => {
  const filterBtn = [
    {
      title: "Project",
      type: "checkbox",
      childs: [
        {
          key: "Sample Project",
          name: "Sample Project",
        },
        {
          key: "Project Z",
          name: "Project Z",
        },
      ],
    },
    {
      title: "Tag",
      type: "radio",
      childs: [
        {
          key: "Sample Project",
          name: "Sample Project",
        },
        {
          key: "Project Z",
          name: "Project Z",
        },
      ],
    },
  ];

  return (
    <>
      <HStack gap="2" m="4">
        {filterBtn.map((btn) => (
          <SearchFilterButton key={btn.title} {...btn} />
        ))}
      </HStack>
    </>
  );
};

export default Task;
