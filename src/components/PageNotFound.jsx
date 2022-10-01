import { Button, Image, VStack } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <VStack w="100%" justifyContent="centers">
        <Image src="https://cdn.dribbble.com/users/2703713/screenshots/8408984/media/b7879109a3e889396451c4cd7555804b.gif" />
      </VStack>
      <Button onClick={() => navigate("/app")} colorScheme="linkedin" pos="absolute" bottom="10">
        GO HOME
      </Button>
    </>
  );
};

export default PageNotFound;
