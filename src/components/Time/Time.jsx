import {
  Box,
  Button,
  Checkbox,
  Divider,
  Fade,
  Flex,
  Heading,
  Input,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { TiMediaRecord } from "react-icons/ti";
import { FaPlay } from "react-icons/fa";
import { FaStop } from "react-icons/fa";
import TimePicker from "react-time-picker";
import { CheckIcon } from "@chakra-ui/icons";
import ProjectList from "./ProjectList";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";
import Projects from "./ProjectList";

const Time = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [play, setPlay] = useState(0);
  const [uptime, setUptime] = useState([0, 0]);
  let [value, onChange] = useState("8:00");
  let [value1, onChange1] = useState("9:00");
  const [starthour, setstarthour] = useState([]);
  const [endhour, setendhour] = useState([]);

  const [data, setData] = useState([]);
  const [form, setForm] = useState({
    id: "",
    description: "",
    project: "",
    start: starthour,
    end: endhour,
  });

  const DeleteProject = (id) => {
    let newData = data.filter((e) => e.id !== id);
    setData(newData);
    rset();
  };
  const rset = () => {
    let h = endhour[0] - starthour[0];
    let m = endhour[1] - starthour[1];
    let temp = [...uptime];
    setUptime([temp[0] - h, temp[1] - m]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
      id: uuidv4(),
    });
  };
  const set = () => {
    let h = endhour[0] - starthour[0];
    let m = endhour[1] - starthour[1];
    let temp = [...uptime];
    setUptime([temp[0] + h, temp[1] + m]);
  };

  const Addproject = (e) => {
    e.preventDefault();
    setData([...data, form]);
    set();
    onClose();
  };

  const start = () => {};

  useEffect(() => {
    setstarthour(value.trim().split(":").map(Number));
    setForm({ ...form, start: starthour.join(":") });
  }, [value]);
  useEffect(() => {
    setendhour(value1.trim().split(":").map(Number));
    setForm({ ...form, end: endhour.join(":") });
  }, [value1]);

  return (
    <Box w="95%" justifyContent="center" p="4">
      {/*-------------------------------------------------------- Upper------------------------------------------- */}

      {/* { console.log(value)} */}
      <Flex justifyContent="space-between">
        {/*left section Time*/}
        <Box display={"flex"} gap="10px" border={""}>
          {/*button*/}
          <Flex gap="5px">
            <Button
              bg="#17c22e"
              disabled={play > 0}
              colorScheme="#17c22e"
              borderRadius="50%"
              onClick={start}
              height="50px"
            >
              <FaPlay color="white" />
            </Button>
            <Button
              bg="white"
              disabled={play <= 0}
              colorScheme="red"
              borderRadius="50%"
              height="50px"
              border="1px solid gray"
            >
              <FaStop color="gray" />
            </Button>
          </Flex>

          {/*select Team*/}
          <Flex ml={"10px"}>
            <Heading>My Time</Heading>
            <Box h="30px" mt={"10px"} ml={"13px"} borderLeft="1px solid"></Box>
            {/* <Menus /> */}
          </Flex>
        </Box>

        <Box display={"flex"} gap="10px">
          <Input type="date"></Input>
          <Text fontSize={"2xl"}>Today</Text>
          <Flex mt="14px" gap="10px">
            <Text as="samp">
              <AiOutlineLeft />
            </Text>
            <Text as="samp">
              <TiMediaRecord />
            </Text>
            <Text as="samp">
              <AiOutlineRight />
            </Text>
          </Flex>
        </Box>
      </Flex>

      {/*------------------------------------------------Middle-----------------------------------------*/}

      <Box border={"1px solid #d0d6db"} mt="0.5rem" p={"1rem"}>
        <Box>
          <Text textAlign={"left"}>Total</Text>
          <Flex mt="-2" justifyContent={"space-between"}>
            <Text fontSize={"3xl"} fontWeight="medium">
              {Math.abs(uptime[0]) + "h" + " " + Math.abs(uptime[1]) + "m"}
            </Text>

            <Popover isLazy>
              <PopoverTrigger>
                <Button borderRadius="50%" height="35px" width="25px">
                  ...
                </Button>
              </PopoverTrigger>
              <PopoverContent marginRight="10px" width="border-box">
                <PopoverHeader fontWeight="semibold">
                  {" "}
                  <CheckIcon /> Billable Time
                </PopoverHeader>
                <PopoverHeader fontWeight="semibold">
                  {" "}
                  <CheckIcon /> Break Time
                </PopoverHeader>
                <PopoverHeader fontWeight="semibold">
                  {" "}
                  <CheckIcon /> Monthly Balance
                </PopoverHeader>
                <PopoverHeader fontWeight="semibold">
                  <CheckIcon /> User Activity
                </PopoverHeader>
                <PopoverHeader fontWeight="semibold">
                  <CheckIcon /> Break Rows
                </PopoverHeader>
                <PopoverArrow />
              </PopoverContent>
            </Popover>
          </Flex>

          <Box>{/* <Slider/> */}</Box>
        </Box>
      </Box>

      {/*-----------------------------------------------down--------------------------------------------------*/}

      <Box border={"1px solid #d0d6db"} mt="0.5rem" borderRadius="6px">
        <Box>
          <Flex gap="10px" p={"1rem"}>
            <Checkbox isDisabled></Checkbox>
            <Button onClick={onOpen}>Add Time Entry</Button>
          </Flex>
          {/* <Break/> */}

          {data.map((e) => {
            // console.log(e)
            return (
              <ProjectList
                props={e}
                key={e.id}
                setPlay={setPlay}
                play={play}
                DeleteProject={DeleteProject}
                value={value}
                value1={value1}
              />
            );
          })}

          {/* Add Time entey */}
          <form action="">
            <Fade in={isOpen}>
              <Divider />
              <Box color="black" w="100%" rounded="md" boxShadow="xs" p={"1rem"} pt="3rem">
                {/* First Flex*/}

                <Flex mt={"-3%"} justifyContent="space-between">
                  <Box w="50%">
                    <Text textAlign={"left"}>Description</Text>
                    <Input
                      w="100%"
                      h="30px"
                      name="description"
                      onChange={(e) => handleChange(e)}
                      placeholder="Describe your task"
                    ></Input>
                  </Box>
                  <Box>
                    <Text textAlign={"left"}>Start Time</Text>
                    <TimePicker onChange={onChange} value={value} />
                  </Box>
                  <Box>
                    <Text textAlign={"left"}>End Time</Text>
                    <TimePicker onChange={onChange1} value={value1} />
                    {/* <Clock setClock2={setClock2}/> */}
                  </Box>

                  <Box w="12%">
                    <Text textAlign={"left"}>Duration</Text>
                    <Text border="1px solid" borderRadius={"3px"}>
                      {endhour[0] - starthour[0]}h : {endhour[1] - starthour[1]}m
                    </Text>
                  </Box>
                </Flex>

                {/* Second Flex*/}
                <Flex mt="30px" w="60%" justifyContent={"space-between"}>
                  <Box w="55%">
                    <Text textAlign={"left"}>Add Project</Text>
                    <Input
                      name="project"
                      onChange={(e) => handleChange(e)}
                      placeholder="Add  your project"
                    />
                  </Box>
                  <Box w="40%">
                    <Text textAlign={"left"}>Add Tags</Text>
                    <Input placeholder="No tags" />
                  </Box>
                </Flex>

                {/* Form End */}
                <Flex gap="20px" textAlign={"left"} mt="20px">
                  <Button bg="blue" type="submit" onClick={Addproject} colorScheme="facebook">
                    Save
                  </Button>
                  <Button onClick={onClose} color="black">
                    Cancel
                  </Button>
                </Flex>
              </Box>
            </Fade>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Time;
