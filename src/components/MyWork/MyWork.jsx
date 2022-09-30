import React from "react";
import { Box, Spacer, Flex, Text, Button } from "@chakra-ui/react";
import { FaPlay, FaStop } from "react-icons/fa";
import { TimeIcon, CalendarIcon } from "@chakra-ui/icons";

const MyWork = () => {
  return (
    <Box bg="white" w="80%" p="0.5rem" color="white">
      <Flex>
        <Text fontSize="3xl" color="black">
          My Work
        </Text>

        <Spacer />
        <Button colorScheme="gray" color="black" size="md">
          Manage Widgets
        </Button>
      </Flex>

      {/* *********** */}

      <Flex gap="5px" justifyContent="space-between" mt="15px">
        <Box
          w="38%"
          bg="white"
          border="1px solid gray"
          height="150px"
          borderRadius="10px"
        >
          <Box padding="10px">
            <Flex>
              <Text fontSize="1xl" color="black" fontWeight="bold">
                Current Task
              </Text>

              <Spacer />
              <Button
                bg="#17c22e"
                colorScheme="red"
                borderRadius="49%"
                size="xs"
                mt="2px"
              >
                <FaPlay color="white" />
              </Button>
            </Flex>
            <Box>
              <Text color="gray">
                You can start tracking your time by clicking the green button.
              </Text>
            </Box>
          </Box>
        </Box>

        <Box
          w="60%"
          h="40px"
          bg="white"
          height="150px"
          border="1px solid gray"
          borderRadius="10px"
        >
          <Box padding="10px">
            <Flex>
              <Text fontSize="1xl" color="black" fontWeight="bold">
                Overview
              </Text>

              <Spacer />
              <TimeIcon color="black" />
            </Flex>
            <Box>
              <Text color="gray">
                We analyzed the data based on your tracked time.
              </Text>
              <Flex justifyContent="space-between">
                <Box
                  width="24%"
                  height="60px"
                  border="1px solid gray"
                  borderRadius="10px"
                >
                  <Box padding="5px">
                    <Text color="gray" size="xs" fontWeight="light">
                      {" "}
                      Today
                    </Text>
                  </Box>
                </Box>
                <Box
                  width="24%"
                  height="60px"
                  border="1px solid gray"
                  borderRadius="10px"
                >
                  <Box padding="5px">
                    <Text color="gray" size="xs" fontWeight="light">
                      {" "}
                      This Week
                    </Text>
                  </Box>
                </Box>
                <Box
                  width="24%"
                  height="60px"
                  border="1px solid gray"
                  borderRadius="10px"
                >
                  <Box padding="5px">
                    <Text color="gray" size="xs" fontWeight="light">
                      {" "}
                      This Month
                    </Text>
                  </Box>
                </Box>
                <Box
                  width="24%"
                  height="60px"
                  border="1px solid gray"
                  borderRadius="10px"
                >
                  <Box padding="5px">
                    <Text color="gray" size="xs" fontWeight="light">
                      Monthly Balance
                    </Text>
                  </Box>
                </Box>
              </Flex>
            </Box>
          </Box>
        </Box>
      </Flex>

      {/* ************* */}

      <Flex gap="5px" justifyContent="space-between" mt="15px">
        <Box
          w="49%"
          bg="white"
          border="1px solid gray"
          height="250px"
          borderRadius="10px"
        >
          <Box padding="10px">
            <Flex>
              <Text fontSize="1xl" color="black" fontWeight="bold">
                Calender Events
              </Text>

              <Spacer />
              <Button
                bg="white"
                colorScheme="red"
                borderRadius="49%"
                size="xs"
                mt="2px"
                border="1px solid gray"
              >
                <CalendarIcon color="black" />
              </Button>
            </Flex>
            <Box>
              <Text color="gray">Connect a calendar to track your events.</Text>
            </Box>
          </Box>
        </Box>

        <Box
          w="49%"
          h="40px"
          bg="white"
          height="250px"
          border="1px solid gray"
          borderRadius="10px"
        >
          <Box padding="10px">
            <Flex>
              <Text fontSize="1xl" color="black" fontWeight="bold">
                Due Tasks
              </Text>

              <Spacer />
              <Button
                bg="white"
                colorScheme="red"
                borderRadius="49%"
                size="xs"
                mt="2px"
              >
                <CalendarIcon color="black" />
              </Button>
            </Flex>
            <Box>
              <Text color="gray">Create a task and set due date.</Text>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default MyWork;
