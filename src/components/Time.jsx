
import {  Box, Button, Checkbox, Divider, Fade, Flex, Input, Text, useDisclosure } from '@chakra-ui/react';
import React, { useState,useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid'
import {AiOutlineRight,AiOutlineLeft} from "react-icons/ai"
import {TiMediaRecord} from "react-icons/ti"
import {FaPlay} from "react-icons/fa"
import {FaStop} from "react-icons/fa"
import TimePicker from 'react-time-picker'
import { CheckIcon } from '@chakra-ui/icons'

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
   
  } from '@chakra-ui/react'



const Time = () => {
    const[play, setPlay]=useState(0)
    const[uptime, setUptime]=useState([0,0])

  return (
    <Box  w="80%" p="0.5rem">

            {/* Upper Part */}
    
    <Flex justifyContent="space-between">
            {/*left section Time*/}
      <Box display={"flex"} gap="10px" border={""}>
             {/*button*/}
          <Flex gap="5px">
          <Button bg="#17c22e" disabled={play>0}  colorScheme='#17c22e' borderRadius="49%"><FaPlay color='white'/></Button>
          <Button bg="red" disabled={play<=0}  colorScheme='red' borderRadius="49%"><FaStop color='white'/></Button>
          </Flex>
    
            {/*select Team*/}
          <Flex ml={"10px"}>
              <Text fontSize='3xl'>My Time</Text>
      <Box Box h="30px" mt={"10px"} ml={"13px"} borderLeft="1px solid"></Box>
            </Flex>
      </Box>
      
    <Box display={"flex"} gap="10px" >
      <Input type="date" ></Input>
      <Text fontSize={"2xl"}>Today</Text>
      <Flex mt="14px" gap="10px">
      <Text as='samp'><AiOutlineLeft/></Text>
      <Text as='samp'><TiMediaRecord/></Text>
      <Text as='samp'><AiOutlineRight/></Text>
      </Flex>
  </Box>
     
    </Flex>

    {/*Middle part*/}

<Box border={"1px solid #d0d6db"} mt="0.5rem" p={"1rem"}>
<Box >
    <Text textAlign={"left"}>Total</Text>
    <Flex mt="-2" justifyContent={"space-between"}>
        <Text fontSize={"3xl"} fontWeight="medium">{Math.abs(uptime[0])+"h"+":"+Math.abs(uptime[1])+"m" }</Text>
        {/* <Text>...</Text> */}
        <Popover isLazy>
  <PopoverTrigger>
    <Button borderRadius="50%" height="35px" width="25px" >...</Button>
  </PopoverTrigger>
  <PopoverContent marginRight="150px" width="border-box">
    <PopoverHeader fontWeight='semibold'>  <CheckIcon/>  Billable Time</PopoverHeader>
    <PopoverHeader fontWeight='semibold'> <CheckIcon/> Break Time</PopoverHeader>
    <PopoverHeader fontWeight='semibold'> <CheckIcon/> Monthly Balance</PopoverHeader>
    <PopoverHeader fontWeight='semibold'><CheckIcon/> User Activity</PopoverHeader>
    <PopoverHeader fontWeight='semibold'><CheckIcon/> Break Rows</PopoverHeader>
    <PopoverArrow />
  </PopoverContent>
</Popover>

    </Flex>
</Box>
</Box>
   
</Box>
  )
}

export default Time
