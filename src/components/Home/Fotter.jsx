import { Box, Flex, HStack, List, ListItem, Text, Wrap, WrapItem } from '@chakra-ui/layout'
import { Avatar, Image } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineDesktop } from 'react-icons/ai'

function Fotter() {
  return (
    <div>
        <Box p={20} bg={"#E2E7EB"} display={"flex"} justifyContent={"center"}>
            {/* <HStack spacing='24px'> */}

            <Box w='300px' p={5} >
                <Image  w='400px' height={65}
                 src="https://tmetric.com/images/tmetric_logo_with_text.svg" alt="logo1" />
            </Box>

            <Box w='250px'>
                <Text><b>Applications</b></Text>
                <Flex gap={5} mt={5} alignItems={"center"} >
                <AiOutlineDesktop size={25}/>
                <Text fontSize={18}>Desktop</Text>
                </Flex>
                <Flex gap={5} mt={2} alignItems={"center"} >
                <AiOutlineDesktop size={25}/>
                <Text fontSize={18}>iOS</Text>
                </Flex>
                <Flex gap={5} mt={2} alignItems={"center"} >
                <AiOutlineDesktop size={25}/>
                <Text fontSize={18}>Android</Text>
                </Flex>
            </Box>

            <Box w='250px' >
                <Text><b>Browser Extensions</b></Text>
                <Flex gap={5} mt={5} alignItems={"center"} >
                    <AiOutlineDesktop size={25}/>
                    <Text fontSize={18}>Chrome</Text>
                    </Flex>
                    <Flex gap={5} mt={2} alignItems={"center"} >
                    <AiOutlineDesktop size={25}/>
                    <Text fontSize={18}>Firefox</Text>
                    </Flex>
                    <Flex gap={5} mt={2} alignItems={"center"} >
                    <AiOutlineDesktop size={25}/>
                    <Text fontSize={18}>Opera</Text>
                    </Flex>
                    <Flex gap={5} mt={2} alignItems={"center"} >
                    <AiOutlineDesktop size={25}/>
                    <Text fontSize={18}>Edge</Text>
                    </Flex>
                    <Flex gap={5} mt={2} alignItems={"center"} >
                    <AiOutlineDesktop size={25}/>
                    <Text fontSize={18}>Safari</Text>
                    </Flex>
                </Box>

                <Box w='250px'>
                    <Text><b>Resources</b></Text>
                    <Text mt={5} fontSize={18}>Solutions</Text>
                    <Text mt={2} fontSize={18}>Integrations</Text>
                    <Text mt={2} fontSize={18}>Help</Text>
                    <Text mt={2} fontSize={18}>Time Trackers Comparison</Text>
                    <Text mt={2} fontSize={18}>Blog</Text>
                </Box>

                <Box w='250px'>
                    <Text><b>About</b></Text>
                    <Text mt={5} fontSize={18}>About TMetric</Text>
                    <Text mt={2} fontSize={18}>Terms of Service</Text>
                    <Text mt={2} fontSize={18}>Privacy Policy</Text>
                    <Text mt={2} fontSize={18}>Cookies Policy</Text>
                </Box>
            {/* </HStack> */}
        </Box>

        <Box p={5} bg={"#E2E7EB"}>
            
            <Flex gap={50}>
            <Text ml={50}>Copyright © Devart 2022</Text>
                <Box ml={400}>
                    <AiOutlineDesktop size={25}/>
                </Box>
                    <AiOutlineDesktop size={25}/>
                    <AiOutlineDesktop size={25}/>
            </Flex>
        </Box>

    </div>
  )
}

export default Fotter