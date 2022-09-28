
import {  Box, Button, Checkbox, Divider, Fade, Flex, Input, Text, useDisclosure } from '@chakra-ui/react';
import React, { useState,useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid'
import {AiOutlineRight,AiOutlineLeft} from "react-icons/ai"
import {TiMediaRecord} from "react-icons/ti"
import {FaPlay} from "react-icons/fa"
import {FaStop} from "react-icons/fa"
import TimePicker from 'react-time-picker'

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
              <Box h="30px" mt={"10px"} ml={"13px"} borderLeft="1px solid"></Box>
              {/* <Menus /> */}
            
          </Flex>
      </Box>
      
      
     
    </Flex>
   
</Box>
  )
}

export default Time
